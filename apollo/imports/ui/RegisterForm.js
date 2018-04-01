// imports/ui/RegisterForm.js

import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'; // eslint-disable-line

export default class RegisterForm extends Component
{
  registerUser = (e) =>
  {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value,
      },
      (error) =>
      {
        if (!error)
        {
          this.props.client.resetStore();
        }
        console.log(error);
      },
    );
  };

  render()
  {
    return (
      <div>
        <form onSubmit={this.registerUser}>
          <input type="email" ref={input => (this.email = input)} />
          <input type="password" ref={input => (this.password = input)} />
          <button type="submit">Register User</button>
        </form>
      </div>
    );
  }
}
