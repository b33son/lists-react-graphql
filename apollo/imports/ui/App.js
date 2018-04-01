// imports/ui/App.js

import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

import ResolutionForm from './ResolutionForm'; // eslint-disable-line
import GoalForm from './GoalForm';
import Goal from './resolutions/Goal';

// eslint-disable-next-line


const resolutionListFragment = (resolutions) => {
  return (
    <ul>
      {resolutions.map(resolution => (
        <li key={resolution._id}>
          <span
            style={{
              textDecoration: resolution.completed ? 'line-through' : 'none',
            }}
          >
            {resolution.name}
          </span>
          <ul>{resolution.goals.map(goal => <Goal goal={goal} key={goal._id} />)}</ul>
          <GoalForm resolutionId={resolution._id} />
        </li>
    ))}
    </ul>
  );
};

const App = ({
  loading, resolutions, client, user,
}) =>
{
  if (loading) return null;
  return (
    <div>
      {user._id ? (
        <button
          onClick={() =>
{
            Meteor.logout(); // eslint-disable-line
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          {/* eslint-disable-line */}
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </div>
      )}
      {user._id !== null && <ResolutionForm />}
      {user._id !== null && resolutionListFragment(resolutions) }
    </div>
  );
};

const resolutionsQuery = gql`
  query resolutionsQuery {
    resolutions {
      _id
      name
      goals {
        _id
        name
        completed
      }
      completed
    }
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
