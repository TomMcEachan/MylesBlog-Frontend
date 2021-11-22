import NavBar from "../components/NavBar";
import TopNavBar from "../components/TopNavBar";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
  </>
  )
}

export default MyApp;


