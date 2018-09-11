import { injectGlobal } from 'styled-components';

/* tslint:disable */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

    body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }

    h1 {
        font-family: Montserrat;
    }
`;

export const theme = {
    dark: '#222',
    primary: '#6e27c5'
}
/* tslint:enable */