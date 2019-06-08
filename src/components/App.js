import React from 'react';
import Session from './Session';
import './App.css';
import Button from './Button';

class App extends React.Component {

    state = { active: false }

    render() {
        if (this.state.active)
        {
            return (
                <div className="content">
                    <Session />
                    <Button
                        onClick={() => this.setState({ active: false })}
                        className={`end pointer`}
                    >
                        End
                    </Button>
                </div>
            );
        }
        return (
            <div className="content">
                <Button
                    onClick={() => this.setState({ active: true })}
                    className={`start pointer`}
                >
                    Start
                </Button>
            </div>
        );
    }
}

export default App;