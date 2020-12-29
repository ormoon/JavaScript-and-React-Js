import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';

export default function ContentCard(props) {
    let data = props.details;
    console.log("props Data >> ",data);
    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={data.airline.logo} style={{ padding: '0px' }}>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={data.name + ", " + data.airline.country}
                    subheader={data.airline.slogan}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <i>{data.airline.head_quaters}</i>
                        <a href={'https://' + data.airline.website} target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' ,margin:"5px 10px"}}><Button variant="contained">Book Now</Button></a>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
