import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}
interface AppStateNew{
  name:String;
  id:Number;
}

class App extends Component<{}, AppStateNew> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      id: 23
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :) {this.state.id}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
