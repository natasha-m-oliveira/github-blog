import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }
body {
  background-color: ${(props) => props.theme['base-background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased; 
}
body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
  line-height: 160%;
}
html {
  scroll-behavior: smooth;
  background: rgb(18, 18, 20);
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  margin-right: 10px;
}
::-webkit-scrollbar-corner {
  border: none;
  background: none;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(61, 60, 66);
  border-radius: 3px;
  cursor: move;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  border: none;
}
`
