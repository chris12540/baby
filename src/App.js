import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Wizard from './Wizard'

import './App.scss';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      picture: ''
    }
  }

  responseFacebook = response => {
    console.log(response);
    if (response.name) {
      this.setState({
        loggedIn: true,
        picture: response.picture.data.url
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className={this.state.loggedIn ? "logged-in" : ''}>
          <div className="colors"></div>
          <p>Guess</p>
          <p>Babyto's</p>
          <p>Gender!</p>
          {this.state.picture && <img src={this.state.picture} alt="" className="picture" />}
        </header>
        {!this.state.loggedIn ? <FacebookLogin
          appId="241944436505485"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={this.responseFacebook}
        />
          :
          <Wizard />}
      </div>
    );
  }
}

export default App;
