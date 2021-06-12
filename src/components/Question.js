import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
    const { ask } = this.props;
    this.state = {
      id: ask.id,
      name: ask.name,
      question: ask.question,
      answered: ask.answered,
      votes: ask.votes,
    };

    this.sumVote = this.sumVote.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { checked } = target;
    // const { answered } = this.state;
    this.setState({
      answered: checked,
    }, () => {
      const { updatedQuestion } = this.props;
      updatedQuestion(this.state);
    });
  }

  sumVote() {
    const { votes } = this.state;
    const actualVotes = votes;
    const newVotes = actualVotes + 1;
    this.setState({
      votes: newVotes,
    }, () => {
      const { updatedQuestion } = this.props;
      updatedQuestion(this.state);
    });
  }

  render() {
    // const { ask } = this.props;
    const { name, question, votes, answered } = this.state;
    return (
      <div className="question-section">
        <div className="top-question-section">
          <p className="user-question-name">{ name }</p>
          <label htmlFor="button-votes">
            <button
              type="button"
              className="button-votes"
              onClick={ this.sumVote }
            >
              { votes }
            </button>
          </label>
        </div>
        <div className="botton-question-section">
          <p className="user-question">{ question }</p>
          <label htmlFor="answer">
            <input
              type="checkbox"
              className="answer"
              name="answer"
              checked={ answered }
              onChange={ this.handlerChange }
            />
          </label>
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
  updatedQuestion: PropTypes.func.isRequired,
};

export default Question;
