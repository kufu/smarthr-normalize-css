# smarthr-normalize-css

A sharable normalize CSS for SmartHR. This is intended to use at a project for styled-components.

## Installation

smarthr-normalize-css is available as an  [npm package](https://www.npmjs.com/package/smarthr-normalize-css).

```sh
// with npm
npm install --save-dev smarthr-normalize-css

// with yarn
yarn add --dev smarthr-normalize-css
```

## Usage

```jsx
import * as React from 'react'
import { CssBaseLine } from 'smarthr-normalize-css'

const App = () => (
  <React.Fragment>
    <CssBaseLine />
    <div>Hello World!</div>
  </React.Fragment>
)
```

You can also use the default export or named export (lowercase) in your own
global style.

```jsx
import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import cssBaseLine from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${cssBaseLine}
  /* other styles */
`

export const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <div>Hello World!</div>
  </React.Fragment>
}
```
