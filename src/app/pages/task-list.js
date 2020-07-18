import React from 'react';
import Option from '../components/options/options';

export default function TaskList() {
    return (
        <div className="task-list">
            <div className="container">
                <p className="title">Tareas <span className="detail"> (3 asignadas)</span></p>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 cardj">
                        <div className="cardj__header">
                            <p className="cardj__header__title">Activa</p>
                            <button type="button" className="btn-default">Agregar tiempo</button>
                        </div>
                        <div className="cardj__body">
                            <div className="cardj__divider"></div>
                            <div className="cardj__body__header">
                                <div className="cardj__body__header__user">
                                    <img alt="avatar-user" className="cardj__body__header__user__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="cardj__body__header__user__name"> Juanita pérez</p>
                                </div>
                                <p className="cardj__body__header__time"><i className='far fa-clock cardj__body__header__time__icon'></i> Tiempo restante: 12 hrs.</p>
                            </div>

                            <div className="cardj__body__body">
                                <div className="cardj__body__body__cnt-header">
                                    <p className="cardj__body__body__cnt-header__title">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="cardj__body__description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 cardj">
                        <div className="cardj__header">
                            <p className="cardj__header__title cardj__header__title--finish">Finalizada</p>
                        </div>

                        <div className="cardj__body">
                            <div className="cardj__divider"></div>
                            <div className="cardj__body__header">
                                <div className="cardj__body__header__user">
                                    <img alt="avatar-user" className="cardj__body__header__user__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="cardj__body__header__user__name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div className="cardj__body__body">
                                <div className="cardj__body__body__cnt-header">
                                    <p className="cardj__body__body__cnt-header__title">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="cardj__body__description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
