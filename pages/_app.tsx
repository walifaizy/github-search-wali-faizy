import { GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>
        {GlobalStyles}
      </style>
    </div>
  );
}

export default MyApp;
