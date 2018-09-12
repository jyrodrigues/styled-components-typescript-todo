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

export type Theme = {
	primary: string;
	secondary: string;
	danger: string;
	light: string;
	dark: string;
	color: {
		done: string;
		tbd: string;
	};
};

export const theme1: Theme = {
	primary: '#ff0198',
	secondary: '#01c1d6',
	danger: '#eb238e',
	light: '#f4f4f4',
	dark: '#222',
	color: {
		done: '#aaa',
		tbd: '#333'
	}
};

export const theme2: Theme = {
	primary: '#6e27c5',
	secondary: '#ffb617',
	danger: '#f16623',
	light: '#f4f4f4',
	dark: '#222',
	color: {
		done: '#aaa',
		tbd: '#333'
	}
};

/* tslint:enable */
