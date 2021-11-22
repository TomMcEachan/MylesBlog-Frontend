import NavBar from "../components/navBar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
  <>
    <NavBar />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;


