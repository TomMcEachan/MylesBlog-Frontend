import NavBar from '../components/NavBar/NavBar';
import TopBar from '../components/TopBar/TopBar';
import axios from 'axios';
import '../styles/index.scss';


axios.defaults.baseURL= "https://worldofnabeeda-strapi.herokuapp.com";

//Returns the App to the Browser
export default function MyApp({ Component, pageProps, featuredPosts}) {
  return (
  <div className="app">
    <TopBar  />
    <NavBar />
      <div className="container">
      <Component {...pageProps}/>
      </div>
  </div>
  )
}
