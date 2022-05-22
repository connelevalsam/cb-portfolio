import '../styles/globals.css';
import { MenuProvider } from '../utils/hamburger';

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />;
    </MenuProvider>
  );
}

export default MyApp;
