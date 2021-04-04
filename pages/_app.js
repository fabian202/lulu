import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/light';
import PublicLayout from '../components/PublicLayout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
