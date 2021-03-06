// import/ui/GoalForm.js
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

class GoalForm extends React.Component
{
  submitForm = () =>
  {
    console.log(this.name.value);
    // eslint-disable-next-line
    this.props
      .createGoal({
        variables: {
          name: this.name.value,
          resolutionId: this.props.resolutionId,
        },
      })
      .catch((error) =>
      {
        console.log(error);
      });
  };
  render()
  {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>submit</button>
      </div>
    );
  }
}

export default graphql(createGoal, {
  name: 'createGoal',
  options: {
    refetchQueries: ['resolutionsQuery'],
  },
})(GoalForm);
