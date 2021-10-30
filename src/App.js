import 'App.scss';
import { Component } from 'react';
import { Redirect } from 'wouter';
import Pages from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Pages />
        {
          !localStorage.getItem('token') ? <Redirect from='/' to='/Login' /> : <Redirect from='/' to='/Home' />
        }
      </div>
    );
  }

}

export default App;
