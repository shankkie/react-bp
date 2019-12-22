import React from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy( () => import('./Warning'));

class App extends React.Component {
    state = {
        count: 0
    };
    render() {
        const {count} = this.state;
        return (
            <div>
                <h2>Hello code charger react boilerplate!</h2>
                <p>{count}</p>
                <button onClick={() => this.setState(state => ({count: count+1}))}>Count++</button>
                { count > 10 ?
                    <React.Suspense fallback={null}>
                        <Warning/>
                    </React.Suspense>
                    : null}
            </div>
        )
    }
}


export default hot(module)(App);
