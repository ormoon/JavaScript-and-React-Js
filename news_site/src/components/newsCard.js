import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function NewsCard(props) {
    let published = (props.newsInfo.publishedAt).split('T');
    let date = published[0];
    let time = published[1].split('Z')[0];
    return (
        <div>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.newsInfo.title}
                    subheader={date+' '+time}
                    
                />
                <CardMedia
                    style={{paddingTop:'56.25%',margin:"20px"}}
                    image={props.newsInfo.urlToImage}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.newsInfo.description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
