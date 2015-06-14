import React from 'react';

export default class App extends React.Component {
		render() {
				return (
					<h1>We &#10084; React</h1>
				);
		}
}

React.render(
		<App />,
		document.getElementById('app')
);
