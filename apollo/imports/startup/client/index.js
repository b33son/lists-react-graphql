// imports/startup/client/index.js
import React from 'react';
import { Meteor } from 'meteor/meteor'; // eslint-disable-line
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, from } from 'apollo-link';

import App from '../../ui/App';

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql'),
});

const authLink = new ApolloLink((operation, forward) =>
{
  const token = Accounts._storedLoginToken(); // eslint-disable-line
  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token,
    },
  }));
  return forward(operation);
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache, // cache: cache
});

const ApolloApp = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() =>
{
  render(<ApolloApp />, document.getElementById('app'));
});
