import * as React from 'react';
import styled from 'styled-components';
import icon from '../images/icon.png';

interface IMyCustomStyledComponentProps {
	isDone: boolean;
}

const TodoText = styled.span.attrs<IMyCustomStyledComponentProps>({})`
    padding: 3px;
    color: ${(props) => (props.isDone ? props.theme.color.done : props.theme.color.tbd)}
`;

const TodoIcon = styled.span.attrs<IMyCustomStyledComponentProps>({})`
    img {
        display: ${(props) => (props.isDone ? 'block' : 'none')};
    }
`;

class Task extends React.Component<any, any> {
	public constructor(props: any) {
		super(props);
		this.state = { isDone: this.props.isDone || false };
	}

	public doIt = () => {
		// console.log(this);
		this.setState({
			isDone: !this.state.isDone
		});
	};

	public render() {
		return (
			<div onClick={this.doIt}>
				<TodoIcon isDone={this.state.isDone}>
					<img src={icon} />
				</TodoIcon>
				<TodoText isDone={this.state.isDone}>Algo aqui</TodoText>
			</div>
		);
	}
}

export default Task;
