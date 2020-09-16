import React from 'react';
import './Break.css';

const Break = props => {
    return (
        <div className='break-container'>
            <h2 id='break-label'>Durée de la pause</h2>
            
            <div className='button-container'>
                <button
                    id='break-increment'
                    onClick={props.incrementBreak}
                    className="btn btn-light"
                    >
                +
                </button>

                <h2 id='break-length' style={{margin: 0, color: "#424242"}}>
                {props.breakLength}
                </h2>
                
                <button
                    id='break-decrement'
                    onClick={props.decrementBreak}
                    className="btn btn-light"
                    >
                -
                </button>
            </div>
        </div>
    )
}

export default Break;