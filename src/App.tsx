import * as React from 'react';
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <CodeWrapper>src/App.tsx</CodeWrapper> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}


// STYLED COMPONENTS

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const AppTitle = styled.h1`
  font-size: 1.5em
`

const CodeWrapper = styled.code`
  font-size: 1.3rem;
`

const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
`

export default App;
