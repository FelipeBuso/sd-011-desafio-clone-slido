import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import AskQuestion from './AskQuestion';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          name: 'Felipe',
          question: 'teste 1',
        },
        {
          name: 'Buso',
          question: 'teste 2',
        },
      ],
    };
    this.addQuestion = this.addQuestion.bind(this);
    console.log(this.state);
  }

  addQuestion(newQuestion) {
    const { questions } = this.state;
    console.log(newQuestion);
    this.setState({
      questions: [...questions, newQuestion],
    });
  }

  render() {
    const { questions } = this.state;
    return (
      <div className="HOME-questions">
        <div>
          <AskQuestion addQuestion={ this.addQuestion } />
        </div>
        <div>
          {
            questions.map((item, i) => <Question key={ i } ask={ item } />)
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
};
