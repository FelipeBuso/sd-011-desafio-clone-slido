import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import data from '../data';
import Question from './Question';
import AskQuestion from './AskQuestion';
import './Questions.css';

class Questions extends Component {
  constructor(props) {
    super();
    this.state = {
      questions: [...props.data],
      sortVotes: false,
    };
    this.addQuestion = this.addQuestion.bind(this);
    this.addIdAnswer = this.addIdAnswer.bind(this);
    this.updateQuestions = this.updateQuestions.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  handlerChange({ target }) {
    const { checked } = target;
    this.setState({
      sortVotes: checked,
    });
  }

  updateData() {
    const { questions } = this.state;
    const { getArray } = this.props;
    getArray(questions);
  }

  addIdAnswer(createNewQuestion) {
    const { questions } = this.state;
    const valueId = questions.length + 1;
    const newQuestionToAdd = {
      id: valueId,
      name: createNewQuestion.name,
      question: createNewQuestion.question,
      answered: false,
      votes: 0,
    };
    return newQuestionToAdd;
  }

  updateQuestions(votedQuestion) {
    const { questions } = this.state;
    const arrayQuestions = questions.map((question) => {
      if (question.id === votedQuestion.id) {
        return { ...question, ...votedQuestion };
      }
      return question;
    });

    this.setState({
      questions: [...arrayQuestions],
    }, () => {
      this.updateData();
    });
  }

  addQuestion(newQuestion) {
    const { questions } = this.state;
    const createdQuestion = this.addIdAnswer(newQuestion);
    console.log(newQuestion);
    this.setState({
      questions: [...questions, createdQuestion],
    }, () => {
      this.updateData();
    });
  }

  render() {
    const { questions, sortVotes } = this.state;
    const answeredless = questions.filter((question) => question.answered !== true);
    let sortedVotes = [];
    if (sortVotes) {
      sortedVotes = answeredless.sort((a, b) => b.votes - a.votes);
    } else {
      sortedVotes = answeredless;
    }
    console.log(sortedVotes);

    return (
      <div className="home-questions">
        <h1>Desafio Clone do Sli.do</h1>
        <div className="ask-question">
          <AskQuestion addQuestion={ this.addQuestion } />
        </div>
        <div className="link-respondidas">
          <Link to="/respondidas">Ver respondidas</Link>
        </div>
        <div className="type-sort">
          <label htmlFor="checkbox-votes">
            Ordenar por votos?
            <input
              type="checkbox"
              className="checkbox-votes"
              onClick={ this.handlerChange }
              value={ sortVotes }
            />
          </label>
        </div>
        <div className="list-questions">
          {
            sortedVotes.map((item) => (<Question
              key={ item.id }
              ask={ item }
              updatedQuestion={ this.updateQuestions }
            />))
          }
        </div>
      </div>
    );
  }
}

export default Questions;

Questions.propTypes = {
  newQuestion: PropTypes.shape({
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number, PropTypes.bool],
    ),
  ).isRequired,
  getArray: PropTypes.func.isRequired,
};
