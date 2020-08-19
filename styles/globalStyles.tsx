import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
:root {
  --intro-email-bg: hsl(217, 28%, 15%);
  --main-bg: hsl(218, 28%, 13%);
  --footer-bg: hsl(216, 53%, 9%);
  --testimonials-bg: hsl(219, 30%, 18%);
  --cyan: hsl(176, 68%, 64%);
  --blue: hsl(198, 60%, 50%);
  --white: hsl(0, 0%, 100%);
}

html {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  color: var(--white);
  background: var(--main-bg);
}
h2,
h3,
nav
{
  font-family: "Raleway", sans-serif;
  font-weight: 700;
}

ul,
li {
  list-style: none;
}

a {
  color: var(--white);
  text-decoration: none;
}

h2 {
  font-size: 40px;
}

main {
  position: relative;
  padding-bottom: 200px;
}

@media (max-width: 375px) {
  html {
    font-size: 10px;
  }

  h2 {
    font-size: 25px;
  }
  }
`;

export default GlobalStyles;
