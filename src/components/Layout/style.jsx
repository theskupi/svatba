import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
  background-color: #f2f2f2;
}
figure {
  margin: 0;
  padding: 0;
}
h1 {
  margin-top: 0;
}`

export const Footer = styled.footer`
  text-align: center;
`
