import React from 'react';
import './Overlay.css';

function Overlay({ message, options }) {
    return (
        <div className="overlay">
            <div>
                <div className="message">{message}</div>
                <div className="options">
                    {options.map((option, index) => (
                        <button key={index} onClick={option.action}>{option.label}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Overlay;
