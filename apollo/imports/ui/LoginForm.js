// imports/ui/LoginForm.js

import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'; // eslint-disable-line

export default class LoginForm extends Component
{
  loginUser = (e) =>
  {
    e.preventDefault();
    // eslint-disable-next-line
    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      if (!error)
      {
        this.props.client.resetStore();
      }
    });
  };

  render()
  {
    return (
      <div>
        <form onSubmit={this.loginUser}>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
