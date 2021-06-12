import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Questions from './components/Questions';
import ReplyQuestions from './components/ReplyQuestions';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [...data],
    };
    this.newData = this.newData.bind(this);
  }

  newData(array) {
    this.setState({
      questions: [...array],
    });
  }

  render() {
    const { questions } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Questions data={ questions } getArray={ this.newData } /> }
          />
          <Route
            path="/respondidas"
            render={ () => <ReplyQuestions data={ questions } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
