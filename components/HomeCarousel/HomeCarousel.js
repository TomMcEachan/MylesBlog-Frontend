import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button} from '@mui/material';


export default function HomeCarousel({featuredPosts}) {

    const featured =featuredPosts.slice(0, 4);

    return (
        <>
           <Carousel clasName="carousel">
               {
                   featured.map((feature) => <Item key={feature.id} featured={featured} />)
               }
           </Carousel>
        </>
    )
}


function Item ({featured}) {
    return (
        <Paper>
            <h2>{featured[0].title}</h2>
            <p>{featured[0].description}</p>
            <Button className="CheckButton">
                Read Blog
            </Button>
        </Paper>
    )
}
