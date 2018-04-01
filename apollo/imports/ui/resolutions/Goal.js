// imports/ui/resolutions/Goal.js

import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const toggleGoal = gql`
  mutation toggleGoal($_id: String!) {
    toggleGoal(_id: $_id) {
      _id
    }
  }
`;

class Goal extends Component
{
  toggleCheckbox = () =>
  {
    this.props
      .toggleGoal({
        variables: {
          _id: this.props.goal._id,
        },
      })
      .catch((error) =>
      {
        console.log(error);
      });
  };
  render()
  {
    const { goal } = this.props;
    return (
      <li>
        <input type="checkbox" onChange={this.toggleCheckbox} checked={goal.completed} />
        <span
          style={{
            textDecoration: goal.completed ? 'line-through' : 'none',
          }}
        >
          {goal.name}
        </span>{' '}
        - {goal.completed ? 'true' : 'false'}
      </li>
    );
  }
}

export default graphql(toggleGoal, {
  name: 'toggleGoal',
  options: {
    refetchQueries: ['resolutionsQuery'],
  },
})(Goal);
