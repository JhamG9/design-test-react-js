import React, { useState } from 'react';
import './options.css';

export default function Option() {
    const [showOptions, setShowOptions] = useState(false);
    const changeStateOptions = () => {
        setShowOptions(!showOptions);
    }

    return (
        <div>
            <i className="fas fa-ellipsis-v" onClick={changeStateOptions}></i>
            {showOptions ?
                <div className="options">
                    <p className="options-text-active" onClick={changeStateOptions}>
                        <i className="fas fa-eye icon"></i> Ver tarea
                    </p>
                    <p className="options-text-default" onClick={changeStateOptions}>
                        <i className="far fa-trash-alt icon"></i> Borrar
                    </p>
                </div>
                : ''
            }
        </div>


    )
}