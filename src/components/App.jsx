import { useState } from 'react';

import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';

const options = [
  { name: 'good', title: 'Good', id: 1 },
  { name: 'neutral', title: 'Neutral', id: 2 },
  { name: 'bad', title: 'Bad', id: 3 },
];

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const countTotalFeedback = () => {
    const totalFeedback = Object.values(state);
    return totalFeedback.reduce((acc, elem) => acc + elem);
  };

  const countPositiveFeedbackPercentage = () => {
    const posPercentage = Math.round((good / countTotalFeedback()) * 100);
    if (!posPercentage) {
      return 0;
    } else {
      return posPercentage;
    }
  };

  const handleUpdate = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

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
        <FeedbackOption options={options} handleUpdate={handleUpdate} />

        {countTotalFeedback() > 0 && (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
