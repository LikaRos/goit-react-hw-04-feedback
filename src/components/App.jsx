import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
import { Component } from 'react';

const options = [
  { name: 'good', title: 'Good', id: 1 },
  { name: 'neutral', title: 'Neutral', id: 2 },
  { name: 'bad', title: 'Bad', id: 3 },
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /* Функция  с формулой*/
  //   countTotalFeedback = () => {
  //     const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
  //     return totalFeedback;
  //   };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, elem) => acc + elem);
  };

  countPositiveFeedbackPercentage = () => {
    const posPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    if (!posPercentage) {
      return 0;
    } else {
      return posPercentage;
    }
  };

  onFeedback = event => {
    console.log(event.target);
    const { name } = event.target; // name -> Good

    this.setState(prevState => {
      const prevStateValue = prevState[name]; // -> Good -> 2

      return { [name]: prevStateValue + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(good, neutral, bad);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOption options={options} onLeaveFeedback={this.onFeedback} />
          {}

          {this.countTotalFeedback() > 0 && (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
