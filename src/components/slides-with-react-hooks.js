import React from 'react';

function Slides({slides}) {
    const [current, setCurrent] = React.useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" disabled={current === 0} onClick={() => setCurrent(0)}>Restart</button>
                <button data-testid="button-prev" className="small" disabled={current === 0} onClick={() => setCurrent(current - 1)}>Prev</button>
                <button data-testid="button-next" className="small" disabled={current === slides.length - 1} onClick={() => setCurrent(current + 1)}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[current]["title"]}</h1>
                <p data-testid="text">{slides[current]["text"]}</p>
            </div>
        </div>
    );

}

export default Slides;
