import { React, useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  const total = good + neutral + bad;


const handleFeedback = e => {
  const { name } = e.currentTarget;
  name === 'good' && setGood(good + 1);
  name === 'neutral' && setNeutral(neutral + 1);
  name === 'bad' && setBad(bad + 1);
  };

const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (good * 100) / total
    );
    return total === 0 ? total : positiveFeedback;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

