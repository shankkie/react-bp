import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <h2>Hello World! Tiara and Octavia!</h2>
                <p>{this.state.count}</p>
                <button onClick={() => this.setState(state => ({count: state.count+1}))}>Count++</button>
            </div>
        )
    }
}


export default App;
