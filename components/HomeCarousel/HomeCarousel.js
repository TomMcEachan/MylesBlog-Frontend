/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Link from 'next/link';



export default function HomeCarousel({featuredPosts}) {

    const featured =featuredPosts.slice(0, 4);

    return (
        <>
           <Carousel className="carousel"
                interval={6000}
                animation="fade"
                navButtonsAlwaysVisible="true"
                indicatorIconButtonProps={{
                    style: {
                        padding: '10px',
                        color: 'black', 
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: '#FDA300',
                        color: 'white'
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '10px', 
                        textAlign: "center"
                    }
                }}
           
           
           
           >
               {
                   featured.map((feature) => <Item key={feature.id} posts={feature} />)
               }
           </Carousel>
        </>
    )
}


function Item ({posts}) {
    return (
        <header className="carouselHeader">
            <img className="carouselImage" alt={posts.image[0].alternativeText} src={posts.image[0].formats.large.url} />
            <section className="carouselLayer">
                <h2 className="carouselTitle">{posts.title}</h2>
                <p className="carouselAuthor">Myles McEachan</p>
                <Link href={`/${posts.categories[0].name}`} passHref>
                    <button className="carouselCategoryButton">{posts.categories[0].name}</button>
                </Link>
                <Link href={`/posts/${posts.title}`} passHref>
                    <button className="readButton">Read Blog</button>
                </Link>
            </section>
       </header>
    )
}
