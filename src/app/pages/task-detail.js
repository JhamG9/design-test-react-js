import React from 'react'

export const TaskDetail = (props) => {
    const { task } = props;


    const calculateTime = (time) => {
        let date1 = new Date(time);
        let date2 = new Date();
        return Math.floor(Math.abs(date1 - date2) / 36e5);
    }
    return (
        <div className="dtl-task">
            <h3 className="dtl-task__title">{task?.title}</h3>
            <hr />

            <div className="row">
                <div className="col-sm-4 dtl-task__user">
                    <p>{task?.assigned.name}</p>
                    <img className="animate__animated animate__fadeInLeft" alt="detail" src={task?.assigned.photo} />
                </div>
                <div className="col-sm-7">
                    <div className="dtl-task__inf">
                        <p className="dtl-task__inf__description"><b>Descripción: </b>{task?.description}</p>
                        <p className="dtl-task__inf__time"><b>Tiempo restante: </b>{calculateTime(task?.time)} hrs</p>
                        <p className="dtl-task__inf__state"><b>Estado: </b>{task?.state}</p>
                    </div>

                </div>
            </div>


        </div>
    )
}