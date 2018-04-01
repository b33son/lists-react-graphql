// import/ui/ResolutionForm.js
import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends React.Component
{
  state = {
    error: null,
  };
  submitForm = () =>
  {
    // eslint-disable-next-line
    this.props
      .createResolution({
        variables: {
          name: this.name.value,
        },
      })
      .catch((error) =>
      {
        console.log(error);
        this.setState({ error: error.message });
      });
  };
  render()
  {
    return (
      <div>
        {this.state.error !== null && <p>{this.state.error}</p>}
        <input type="text" ref={input => (this.name = input)} />
        <button onClick={this.submitForm}>submit</button>
      </div>
    );
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['resolutionsQuery'],
  },
})(ResolutionForm);
