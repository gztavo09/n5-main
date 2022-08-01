import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;

        & iframe {
            display: none;
        }
    }
`

export default GlobalStyle;