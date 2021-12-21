import DesktopNav from '../components/Navigation/Desktop/DesktopNav';
import MobileNav from '../components/Navigation/Mobile/MobileNav';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import Head from "next/head";
import '../styles/index.scss';


axios.defaults.baseURL= "https://worldofnabeeda-strapi.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps, latestPosts}) {

  return (
  <div className="app">
    <Head>
      <meta name="description" content="World of Nabeeda Blog" />
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
    <div className="container">
      <Component {...pageProps}/>
    </div>
    <Footer />
  </div>
  )
}

