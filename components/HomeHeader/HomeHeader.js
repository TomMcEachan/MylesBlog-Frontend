import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel';

export default function HomeHeader({featuredPosts}) {
    return (
        <header>
          <HomeCarousel featuredPosts={featuredPosts}/>
        </header>
    )
}
