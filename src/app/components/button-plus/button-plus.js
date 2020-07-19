import React from 'react';

export default function ButtonPlus(props) {
    const { setClick } = props;

    return (
        <div className="btn-plus" onClick={() => setClick(true)}>
            <p className="btn-plus__icon">
                <i className='fas fa-plus '></i>
            </p>
        </div>
    )
}