import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component{
    render() {
        const { options, onLeaveFeedback } = this.props
        const optionsArray = Object.keys(options)

        return (
            <div className={css.buttonWrapper}>
                {optionsArray.map((option, index) => (
                    <button className={css.button} type="button" onClick={onLeaveFeedback} key={index} name={option}>{option}</button>
                ))}
            </div>
        )
    }
}
FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func,
}