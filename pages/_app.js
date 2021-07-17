import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';
// import img from '../public/assets/background-ww.jpg';

const img = 'https://images8.alphacoders.com/294/thumb-1920-294069.jpg';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-clip: padding-box;
    background-position: center;
    background-size: cover;
    font-family: sans-serif;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
