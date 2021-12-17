import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import Footer from '../components/Footer/Footer';
import HamburgerMenu from '../components/NavBar/HamburgerMenu';
import axios from 'axios';
import '../styles/index.scss';


axios.defaults.baseURL= "https://worldofnabeeda-strapi.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps, latestPosts}) {

  return (
  <div className="app">
    <TopBar />
    <HamburgerMenu />
    <NavBar />
    <div className="container">
      <Component {...pageProps}/>
    </div>
    <Footer />
  </div>
  )
}

