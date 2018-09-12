import * as React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import Task from './components/Task';
import ThemeSelect from './components/ThemeSelect';
import logo from './logo.svg';
import { theme1, theme2 } from './theme/globalStyle';

class App extends React.Component {
	public state: any = {
		theme: theme1
	};

	public handleThemeChange = (e: any) => {
		const theme = e.target.value === 'theme1' ? theme1 : theme2;
		this.setState({ theme });
	};

	public render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<AppWrapper>
					<AppHeader>
						<AppLogo src={logo} alt="logo" />
						<AppTitle>Welcome to React</AppTitle>
					</AppHeader>
					<AppIntro>
						To get started, edit <CodeWrapper>src/App.tsx</CodeWrapper> and save to reload.
					</AppIntro>
					<ThemeSelect handleThemeChange={this.handleThemeChange} />
					<Task isDone={true} />
					<Task isDone={false} />
				</AppWrapper>
			</ThemeProvider>
		);
	}
}

// STYLED COMPONENTS

const AppWrapper = styled.div`text-align: center;`;

const AppHeader = styled.header`
	height: 150px;
	padding: 20px;
	color: ${(props) => props.theme.dark};
	background-color: ${(props) => props.theme.primary};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const AppLogo = styled.img`
	animation: ${rotate360} infinite 20s linear;
	height: 80px;
	&:hover {
		animation: ${rotate360} infinite 1.5s linear;
	}
`;

const AppTitle = styled.h1`
	font-size: 1.5em;
	font-weight: 900;
`;

const CodeWrapper = styled.code`font-size: 1.3rem;`;

const AppIntro = styled.p`
	color: ${(props) => props.theme.dark};
	font-size: large;
`;

export default App;
