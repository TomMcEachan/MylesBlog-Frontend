import DesktopNav from '../components/Navigation/Desktop/DesktopNav';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import '../styles/index.scss';


axios.defaults.baseURL= "https://worldofnabeeda-strapi.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps, latestPosts}) {

  return (
  <div className="app">
    <TopBar />
    <DesktopNav />
    <div className="container">
      <Component {...pageProps}/>
    </div>
    <Footer />
  </div>
  )
}

