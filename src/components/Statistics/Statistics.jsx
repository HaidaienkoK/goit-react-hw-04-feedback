import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div className={css.statisticWrapper}>
          <p className={css.statisticItem}>Good: {good}</p>
          <p className={css.statisticItem}>Neutral: {neutral}</p>
          <p className={css.statisticItem}>Bad: {bad}</p>
          <p className={css.statisticItem}>Total: {total}</p>
          <p className={css.statisticItem}>
            Positive feedback: {positivePercentage}%
          </p>
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
