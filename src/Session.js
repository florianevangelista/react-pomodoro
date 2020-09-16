import React from 'react';
import './Session.css';

const Session = props => {
    return (
        <div className='session-container'>
            <h2 id='session-label'>Durée de la session</h2>
            
            <div className='button-container'>
                <button
                    id='session-increment'
                    onClick={props.incrementSession}
                    className="btn btn-light"
                    >
                +
                </button>

                <h2 id='session-length' style={{margin: 0, color: "#424242"}}>
                {props.sessionLength}
                </h2>
                
                <button
                    id='session-decrement'
                    onClick={props.decrementSession}
                    className="btn btn-light"
                    >
                -
                </button>
            </div>
        </div>
    )
}

export default Session;