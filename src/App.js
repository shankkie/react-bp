import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <h2 className={ this.state.count > 10 ? 'warning': null}>Hello codecharger react boilerplate!</h2>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState(state => ({count: state.count+1}))}>Count++</button>
            </div>
        )
    }
}


export default hot(module)(App);
