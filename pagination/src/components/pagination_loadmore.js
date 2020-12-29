import React, { useState } from 'react';
import { FetchAPI } from './fetch_api';
import { Button, CircularProgress } from '@material-ui/core';
import ContentCard from './contentCard';

export default function Pagination_Loadmore() {
    const [pageState, setPageState] = useState({
        page: 0, pageLoad: true, pageData: [], totalPages: 0, size: 10, loadMoreData: false
    });

    const handleClick = () => {
        setPageState({
            ...pageState, page: pageState.page + 1, loadMoreData: true
        });
    };


    React.useEffect(() => {
        FetchAPI.getData({ pageNo: pageState.page, pageSize: pageState.size })
            .then(res => {
                console.log(res.data);

                let newData = pageState.pageData.concat(res.data.data);
                pageState.pageData = newData;
                pageState.totalPages = res.data.totalPages;
                pageState.loadMoreData = false;
                pageState.pageLoad = false;
                setPageState({ ...pageState });
            })
            .catch((err) => {
                console.log("Error >> ", err)
            })
    }, [pageState.page, pageState.size]);



    return (
        <div style={{ margin: '2%', padding: '1%' }}>

            <div>
                {pageState.pageLoad ? <div style={{ margin: "20% 50%" }}><CircularProgress /></div> : <div>
                    {pageState.pageData.map(data =>
                        <div style={{ margin: '3% 1%' }}>
                            <ContentCard details={data} key={data._id} />
                        </div>
                    )}
                </div>}
            </div>
            <div style={{ margin: '1% 43%' }}>
                {pageState.loadMoreData ? <div style={{ margin: "20% 50%" }}><CircularProgress /></div> :
                    <Button variant="contained" onClick={() => handleClick()}>Load More</Button>
                }
            </div>
        </div>
    )
}

