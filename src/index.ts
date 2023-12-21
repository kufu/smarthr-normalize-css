import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

export const cssBaseLine = css`
  ${reset}

  body {
    overflow-wrap: break-word;
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }

  a {
    color: inherit;
  }

  img {
    vertical-align: middle;
  }

  input,
  button,
  textarea {
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
`

export const CssBaseLine = createGlobalStyle`${cssBaseLine}`

export default cssBaseLine
