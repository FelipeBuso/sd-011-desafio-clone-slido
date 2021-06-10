import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AskQuestion extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      question: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitQuestion(callBack) {
    callBack(this.state);
    this.setState({
      name: '',
      question: '',
    });
  }

  render() {
    const { question, name } = this.state;
    const { addQuestion } = this.props;
    return (
      <div className="ask-question">
        <div className="ask-a-question">
          <label htmlFor="question">
            Pergunta:
            <textarea
              name="question"
              onChange={ this.handleChange }
              value={ question }
              rows="5"
              cols="10"
            />
          </label>
        </div>
        <div className="name-question">
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>
        </div>
        <div className="button">
          <button
            type="button"
            onClick={ () => { this.submitQuestion(addQuestion); } }
          >
            Adicionar
          </button>
        </div>
      </div>
    );
  }
}

export default AskQuestion;

AskQuestion.propTypes = {
  addQuestion: PropTypes.shape({
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};
