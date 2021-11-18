import 'App.scss';
import { UserContextprovider } from 'context/UserContext';
import { Component } from 'react';
import LoginRoutes from 'routes/LoginRoutes';

class App extends Component {
	render() {
		return (
			<UserContextprovider>
				<LoginRoutes></LoginRoutes>
			</UserContextprovider>
		);
	}

}

export default App;
