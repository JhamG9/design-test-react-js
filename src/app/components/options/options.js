import React, { useState } from 'react';

export default function Option() {
    const [showOptions, setShowOptions] = useState(false);
    const changeStateOptions = () => {
        setShowOptions(!showOptions);
    }

    return (
        <div>
            <i className="fas fa-ellipsis-v points" onClick={changeStateOptions}></i>
            {showOptions ?
                <div className="options">
                    <p className="options__text options__text--active" onClick={changeStateOptions}>
                        <i className="fas fa-eye options__text__icon"></i> Ver tarea
                    </p>
                    <p className="options__text" onClick={changeStateOptions}>
                        <i className="far fa-trash-alt options__text__icon"></i> Borrar
                    </p>
                </div>
                : ''
            }
        </div>


    )
}