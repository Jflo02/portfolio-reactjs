import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --dark-bg: #769FCD;
    --gray-1: #F7FBFC;
    --deep-dark: rgba(187, 184, 184, 0.63);
    --gray-2: #D6E6F2;
    --white: white;
    --black: black;
  }

  html {
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img, svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    outline: none
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  /* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);

    .scroll-content {
      background-color: var(--dark-bg);
    }

    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);

      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
