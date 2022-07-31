import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <>
      <h2 className={styles.statisticsTitle}>Statistics</h2>
      <div className={styles.spanWrap}>
        <span className={(styles.span, styles.statGood)}>Good: {good}</span>
        <span className={(styles.span, styles.statNeutral)}>
          Neutral: {neutral}
        </span>
        <span className={(styles.span, styles.statBad)}>Bad: {bad}</span>
        <span className={(styles.span, styles.statTotal)}>Total: {total} </span>
        <span className={(styles.span, styles.statPercetage)}>
          Positive feedback: {positivePercentage} %
        </span>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
