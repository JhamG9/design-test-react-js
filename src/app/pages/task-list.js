import React from 'react';
import Option from '../components/options/options';
import './task-list.css';

export default function TaskList() {
    return (
        <div className="task-list">
            <div className="container">
                <p className="title">Tareas <span className="detail"> (3 asignadas)</span></p>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title">Activa</p>
                            <button type="button" className="btn-default">Agregar tiempo</button>
                            
                        </div>
                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                                <p className="card-time"><i className='far fa-clock card-time-icon'></i> Tiempo restante: 12 hrs.</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title">Activa</p>
                            <button type="button" className="btn-default">Agregar tiempo</button>
                            
                        </div>
                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                                <p className="card-time"><i className='far fa-clock card-time-icon'></i> Tiempo restante: 12 hrs.</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title">Activa</p>
                            <button type="button" className="btn-default">Agregar tiempo</button>
                            
                        </div>
                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                                <p className="card-time"><i className='far fa-clock card-time-icon'></i> Tiempo restante: 12 hrs.</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title">Activa</p>
                            <button type="button" className="btn-default">Agregar tiempo</button>
                            
                        </div>
                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                                <p className="card-time"><i className='far fa-clock card-time-icon'></i> Tiempo restante: 12 hrs.</p>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 column">
                        <div className="card-header">
                            <p className="card-header-title-red">Finalizada</p>
                        </div>

                        <div className="body">
                        <div className="divider"></div>
                            <div className="card-body-header">
                                <div className="card-user">
                                    <img className="card-user-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYkWSUmfJQeFUiec7FlmiX8OMjugZYLkPH-g&usqp=CAU" />
                                    <p className="card-user-name"> Juanita pérez</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: '2px solid #2DC09D', paddingLeft: 10, marginTop: 10 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="title-body">Título de la tarea</p>
                                    <Option></Option>
                                </div>
                                <p className="card-description">When you enter into any new area of science,
                                you almost always find yourself with a baffling new language</p>
                            </div>
                        </div>
                    </div>

                    


                </div>
            </div>
        </div>
    )
}
