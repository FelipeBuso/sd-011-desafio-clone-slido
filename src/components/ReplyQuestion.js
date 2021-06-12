import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    const { ask } = this.props;
    this.state = {
      name: ask.name,
      question: ask.question,
    };
  }

  render() {
    const { name, question } = this.state;
    return (
      <div className="question-section">
        <div className="top-question-section">
          <p className="user-question-name">{ name }</p>
        </div>
        <div className="botton-question-section">
          <p className="user-question">{ question }</p>
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  ask: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    answered: PropTypes.bool.isRequired,
  }).isRequired,
  // updatedQuestion: PropTypes.func.isRequired,
};

export default Question;
