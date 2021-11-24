import NavBar from '../components/NavBar/NavBar';
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  

  return (
  <>
    <NavBar />
      <div className="container">
      <Component {...pageProps} />
      </div>
  </>
  )
}

export default MyApp
