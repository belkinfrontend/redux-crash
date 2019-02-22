import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Notices from './components/Notices';
import AddNotice from './components/AddNotice';

import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<p>
							<code>Notice App</code>
						</p>
						<a
							className="App-link"
							href="https://redux.js.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn Redux
						</a>
					</header>
					<main>
						<AddNotice />
						<Notices />
					</main>
				</div>
			</Provider>
		);
	}
}

export default App;
