import React from 'react';
import { Provider } from 'mobx-react';
import { ActivityIndicator, StatusBar, YellowBox } from 'react-native';
import App from '../app/routes';

export interface Props {}

export interface State {
	ready: boolean;
}
YellowBox.ignoreWarnings([ 'Warning: componentWill' ]);
export default function(stores: any) {
	return class Setup extends React.Component<Props, State> {
		constructor(props: any) {
			super(props);
			this.state = {
				ready: false
			};
		}

		componentDidMount() {
			this.setState({ ready: true });
			StatusBar.setBarStyle('dark-content');
		}

		render() {
			if (!this.state.ready) {
				return <ActivityIndicator />;
			}
			return (
				<Provider {...stores}>
					<App />
				</Provider>
			);
		}
	};
}
