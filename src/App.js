import 'App.scss';
import { Component } from 'react';
import { Redirect } from 'wouter';
import Pages from 'pages';
import { isLogged } from 'services';

class App extends Component {
  render() {
    return (
      <div>
        <Pages />
        {
          isLogged() ?
            <Redirect from='/' to='/Home' /> :
            <Redirect from='/' to='/Login' />
        }
      </div>
    );
  }

}

export default App;
