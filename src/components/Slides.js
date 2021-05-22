import React from 'react';

class Slides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.restartButton = this.restartButton.bind(this);
        this.prevButton = this.prevButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
    }

    restartButton() {
        this.setState({
            count: 0
        });
    }

    prevButton() {
        this.setState({
            count: this.state.count - 1
        });
    }

    nextButton() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <div id="navigation" className="text-center">
                    <button data-testid="button-restart" className="small outlined" disabled={this.state.count === 0} onClick={this.restartButton}>Restart</button>
                    <button data-testid="button-prev" className="small" disabled={this.state.count === 0} onClick={this.prevButton}>Prev</button>
                    <button data-testid="button-next" className="small" disabled={this.state.count === this.props.slides.length - 1 } onClick={this.nextButton}>Next</button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{this.props.slides[this.state.count].title}</h1>
                    <p data-testid="text">{this.props.slides[this.state.count].text}</p>
                </div>
            </div>
        );
    }
}

export default Slides;
