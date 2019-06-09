import React from 'react';
import './Session.scss';
import Button from './Button';

class Session extends React.Component {

    state = { questions: [] }

    renderScore() {
        if (!(this.state.questions.length > 0))
        {
            return;
        }
        let positives = 0;
        this.state.questions.forEach(element => {
            if (element) positives++;
        });
        const scorePercent = Math.trunc( (positives / this.state.questions.length) * 100 );
        return <div className="score">{positives} / {this.state.questions.length}: {scorePercent}% correct</div>;
    }

    onClickButton = (buttonValue) => {
        this.setState({ questions: [...this.state.questions, buttonValue] });
    }

    render() {
        return (
            <div className="session">
                {this.renderScore()}
                <div className="vote-buttons">
                    <Button
                        onClick={() => this.onClickButton(false)}
                        className={`huge red thumbs down outline icon pointer`}
                    />
                    <Button
                        onClick={() => this.onClickButton(true)}
                        className={`huge green thumbs up outline icon pointer`}
                    />
                </div>
            </div>
        );
    }
};

export default Session;