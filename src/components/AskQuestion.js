import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AskQuestion.css';

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
      <div className="ask-question-section">
        <div className="ask-a-question">
          <label htmlFor="ask-question">
            <textarea
              name="question"
              className="ask-question-textarea"
              onChange={ this.handleChange }
              value={ question }
              placeholder="Digite sua pergunta"
            />
          </label>
        </div>
        <div className="name-question">
          <label htmlFor="ask-name">
            <input
              type="text"
              name="name"
              className="ask-name-input"
              onChange={ this.handleChange }
              value={ name }
              placeholder="Digite seu nome"
            />
          </label>
        </div>
        <div className="button">
          <button
            type="button"
            className="button-add"
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
