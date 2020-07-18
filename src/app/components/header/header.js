import React from 'react';

export default function Header() {
    return (
        <div className="row cnt">
            <div className="cnt__header">
                <p className="cnt__header__title">To do list</p>
                <p className="cnt__header__sub-title">Viernes, 17 de Febrero</p>
            </div>
            <img alt="img-avatar" className="cnt__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
        </div>
    )
}