import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className="row cnt-header">
            <div className="cnt-title">
                <p className="title-header">To do list</p>
                <p className="sub-title">Viernes, 17 de Febrero</p>
            </div>
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
        </div>
    )
}