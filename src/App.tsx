import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { styled, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1.2;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-weight: 300;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  text-decoration:none;
  color:inherit;
}
  
*{
  box-sizing:border-box;
}
`;

const ToggleLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 30px 0px 0px 30px;
  justify-content: center;
`;

const ThemeToggle = styled.input`
  appearance: none;
  position: relative;
  border: max(2px, 0.1em) solid gray;
  border-radius: 1.25em;
  width: 2.25em;
  height: 1.25em;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: gray;
    transition: left 250ms linear;
  }

  &:checked::before {
    background-color: white;
    left: 1em;
  }

  &:checked {
    background-color: tomato;
    border-color: tomato;
  }

  &:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) solid tomato;
  }
  &:enabled:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
  }
`;

const Home = styled.div`
  background-color: "transparent";
  color: ${(props) => props.theme.textColor};
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px 0px 30px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function App() {
  const [themeActive, setThemeActive] = useState(false);

  const ThemeToggleHandle = () => setThemeActive((current) => !current);

  return (
    <>
      <ThemeProvider theme={themeActive ? darkTheme : lightTheme}>
        <ToggleLabel>
          <ThemeToggle
            onClick={ThemeToggleHandle}
            role="switch"
            type="checkbox"
          />
          <span>Dark Mode</span>
        </ToggleLabel>
        <Home>
          <Link to={{ pathname: `/` }}>Home</Link>
        </Home>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </ThemeProvider>
    </>
  );
}

export default App;
