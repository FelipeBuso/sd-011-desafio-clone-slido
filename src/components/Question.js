import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    const { ask } = this.props;
    return (
      <div className="question-section">
        <p className="user-question">{ ask.name }</p>
        <p className="question">{ ask.question }</p>
      </div>
    );
  }
}

Question.propTypes = {
  ask: PropTypes.shape({
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
