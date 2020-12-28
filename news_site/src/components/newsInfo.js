import React from 'react'
import { NewsAPI } from './newsApi'
import NewsCard from './newsCard';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function NewsInfo() {

    const [newsData, setnewsData] = React.useState([]);
    const [pageLoad, setPageLoad] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        getNews();
    }, []);



    function getNews() {
        NewsAPI.getCurrentNews()
            .then(res => {
                setnewsData(res.data.articles);
                setPageLoad(false);
                // console.log(newsData);
            })
            .catch(err => {
                setError(true);
                setPageLoad(false);
            })
    }
    return (
        <div style={{ padding: "20px" }}>
            {pageLoad ? <div style={{ margin: '15% 45%' }}><CircularProgress /></div> : <div>{!error ? <Grid container spacing={3}>
                {newsData.map((news) =>
                    <Grid key={news.source.id} item xs={12} sm={4}>
                        <a target="_blank" rel="noreferrer" href={news.url} style={{ textDecoration: 'none' }}>
                            <NewsCard newsInfo={news} />
                        </a>
                    </Grid>
                )}
            </Grid> :
                <div style={{ margin: '18% 45%' }}>
                    <Button variant="contained" onClick={() => { setPageLoad(true); getNews(); }}>Retry</Button>
                </div>
            }
            </div>
            }
        </div>
    )
}
