import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React! By Codemio.com</p>;
  }
}

render(<App/>, document.getElementById('app'));
