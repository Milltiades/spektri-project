
import { createGlobalStyle } from "styled-components";

export default function GlobalStylesComponent() {
  return <GlobalStyle />;
}

const GlobalStyle = createGlobalStyle`
    :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  
}


body {

 
  min-width: 320px;
  min-height: 100vh;
}


button {
  cursor: pointer;
  transition: all .3s ease;
}


.userMeil{
  &:hover {
    opacity: 0.8;
    transition: all .3s ease;
    color: #6e6e6e;
  }
}
`;
