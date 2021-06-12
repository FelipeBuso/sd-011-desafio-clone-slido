import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReplyQuestion from './ReplyQuestion';
import './ReplyQuestions.css';

class ReplyQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...props.data],
    };
  }

  render() {
    const { questions } = this.state;
    const replyQuestions = questions.filter((item) => item.answered === true);
    return (
      <div className="reply-questions-section">
        <h1> Perguntas Respondidas</h1>
        { replyQuestions.map((item) => <ReplyQuestion key={ item.id } ask={ item } />) }
        <div className="link-voltar">
          <Link to="/">Voltar</Link>
        </div>
      </div>

    );
  }
}

export default ReplyQuestions;

ReplyQuestions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number, PropTypes.bool],
    ),
  ).isRequired,
};
