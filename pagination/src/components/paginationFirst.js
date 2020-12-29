import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { FetchAPI } from './fetch_api';
import { CircularProgress } from '@material-ui/core';
import ContentCard from './contentCard';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function PaginationFirst() {

    // const [page, setPage] = React.useState(0);
    // const [pageLoad, setPageLoad] = React.useState(true);
    // const [pageData, setPageData] = React.useState([]);
    // const [totalPages, setTotalPages] = React.useState(0);
    // const [size, setSize] = React.useState(10);


    const [pageState, setPageState] = useState({
        page: 0, pageLoad: true, pageData: [], totalPages: 0, size: 10
    });

    const handlePageChange = (event, page) => {
        // console.log(page);
        // setPage(page-1);
        // setPageLoad(true);

        setPageState({
            ...pageState, page: page - 1,
            pageLoad: true
        });
    };

    const handleChange = (event) => {
        // setSize(event.target.value);
        // setPageLoad(true);

        setPageState({
            ...pageState, size: event.target.value,
            pageLoad: true
        });
    };

    React.useEffect(() => {
        FetchAPI.getData({ pageNo: pageState.page, pageSize: pageState.size })
            .then(res => {
                console.log(res.data);
                // setPageData(res.data.data);
                // setTotalPages(res.data.totalPages)
                // setPageLoad(false);

                setPageState({
                    ...pageState, pageData: res.data.data,
                    totalPages: res.data.totalPages,
                    pageLoad: false
                });
            })
            .catch((err) => {
                console.log("Error")
            })
    }, [pageState.page, pageState.size]);



    return (
        <div style={{ margin: '2%', padding: '1%' }}>

            <FormControl style={{ marginLeft: '35%', padding: '10px', }}>
                <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
                <Select
                    value={pageState.size}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>
                <FormHelperText>Select the size of a page</FormHelperText>
            </FormControl>

            <div>
                {pageState.pageLoad ? <div style={{ margin: "20% 50%" }}><CircularProgress /></div> : <div>
                    {pageState.pageData.map(data =>
                        <div style={{ margin: '3% 1%' }}>
                            <ContentCard details={data} key={data._id} />
                        </div>
                    )}
                </div>}
            </div>
            <div style={{ margin: '3% 25%' }}>
                <Pagination count={pageState.totalPages - 1} variant="outlined" onChange={handlePageChange} />
            </div>
        </div>
    )
}
