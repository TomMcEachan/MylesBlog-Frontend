import DesktopNav from '../components/Navigation/Desktop/DesktopNav';
import MobileNav from '../components/Navigation/Mobile/MobileNav';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import Head from "next/head";
import '../styles/index.scss';
import Script from 'next/script';

axios.defaults.baseURL= "https://mylesmceachan-blog-cms.herokuapp.com";
//Returns the App to the Browser
export default function MyApp({ Component, pageProps}) {

  return (
  <div className="app">
    <Head>
      <title>Myles McEachan - Blog </title>
      <meta name="description" content="Tom McEachan Blog" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />    
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />    
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />    
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff" />      
    </Head>
    <TopBar />
    <DesktopNav />
    <MobileNav />
    <div>
      <Component {...pageProps}/>
    </div>
    <Script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-61f968fb53610790"></Script>
    <Footer />
  </div>
  )
}

