import DesktopNav from '../components/Navigation/Desktop/DesktopNav';
import MobileNav from '../components/Navigation/Mobile/MobileNav';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import Head from "next/head";
import '../styles/index.scss';
import Script from 'next/script';
import * as ga from '../lib/ga'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import CookieConsent from "react-cookie-consent";
import Link from "next/Link";



//This is the base URL for the CMS content 
axios.defaults.baseURL= "https://mylesmceachan-blog-cms.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps}) {

  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


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
    <CookieConsent
      location="top"
      buttonText="Sure!"
    >This website uses cookies to enhance the user experience. <Link href="/cookies">Find out more</Link></CookieConsent>
    <Footer />
  </div>
  )
}

