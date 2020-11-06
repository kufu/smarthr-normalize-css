import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

export const cssBaseLine = css`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body {
    word-wrap: break-word;
    font-family: system-ui, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
  }
  input,
  button,
  textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`

export const CssBaseLine = createGlobalStyle`${cssBaseLine}`

export default cssBaseLine
