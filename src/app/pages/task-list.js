import React, { useState, useEffect } from 'react';
import Option from '../components/options/options';
import { tasksData } from '../data/task';
import { TestModal } from '../components/utils/modal';
import ChangeAssigned from '../components/user/changeAssigned';
import { ChangeTitleTask } from '../components/user/changeTitleTask';
import { ChangeDescription } from '../components/user/changeDescription';
import { AddTimeTask } from '../components/user/addTimeTask';
import ButtonPlus from '../components/button-plus/button-plus';
import { TaskCreate } from './task-create';
import { TaskDetail } from './task-detail';
import Swal from 'sweetalert2';


export default function TaskList() {
    const [tasks, setTasks] = useState(tasksData);
    //Modal
    const [showModal, setShowModal] = useState(false);
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalDetail, setShowModalDetail] = useState(false);

    //Task
    const [task, setTask] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);
    const [seeTask, setSeeTask] = useState(null);

    //Change assigned
    const [assigned, setAssigned] = useState(null);
    const [changedAssigned, setChangedAssigned] = useState(false);

    const changeAssigned = (task) => {
        setAssigned(task.assigned);
        setTask(task);
        setShowModal(true);
    }

    const calculateTime = (time) => {
        let date1 = new Date(time);
        let date2 = new Date();
        return Math.floor(Math.abs(date1 - date2) / 36e5);
    }

    const changeStateTask = (task) => {
        if (task.state === 'Activa') {
            Swal.fire({
                title: '¿Deseas cambiar el estado de la tarea a finalizado?',
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No',
                confirmButtonText: 'Si, cambiar',
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    let indexOf = tasks.findIndex((item) => item.id === task.id);
                    const newItems = [...tasks];
                    newItems[indexOf].state = 'Finalizada';
                    setTasks(newItems);
                }
            })
        }
    }

    useEffect(() => {
        if (changedAssigned) {
            setShowModal(false);
            let indexOf = tasks.findIndex((item) => item.id === task.id);
            const newItems = [...tasks];
            newItems[indexOf].assigned = changedAssigned;
            setTasks(newItems);
            Swal.fire({
                title: `Tarea asignada a ${changedAssigned.name}`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        }
    }, [changedAssigned]);

    useEffect(() => {
        if (seeTask) {
            setShowModalDetail(true);
        }
    }, [seeTask]);


    useEffect(() => {
        if (deleteTask) {
            Swal.fire({
                title: `Tarea eliminada correctamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            const newList = tasks.filter((item) => item.id !== deleteTask.id);
            setTasks(newList);
        }
    }, [deleteTask]);

    return (
        <div className="task-list">
            <div className="container">
                <p className="title">Tareas <span className="detail"> (3 asignadas)</span></p>
                <div className="row">
                    {
                        tasks.map(task => (
                            <div key={task.id} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 cardj">
                                <div className="cardj__header">
                                    <p onClick={() => changeStateTask(task)} title={task.state === 'Activa' ? '¿Finalizar tarea?' : null} className={'cardj__header__title ' + (task.state === 'Finalizada' ? 'cardj__header__title--finish' : '')}>
                                        {task.state}
                                    </p>
                                    {
                                        task.state === 'Activa' ?
                                            <AddTimeTask setTasks={setTasks} tasks={tasks} task={task} />
                                            : null
                                    }
                                </div>
                                <div className="cardj__body">
                                    <div className="cardj__divider"></div>
                                    <div className="cardj__body__header">
                                        <div className="cardj__body__header__user" title="Cambiar asignado" onClick={() => changeAssigned(task)}>
                                            <img alt="avatar-user" className="cardj__body__header__user__image" src={task.assigned.photo} />
                                            <p className="cardj__body__header__user__name">{task.assigned.name}</p>
                                        </div>
                                        {
                                            task.state === 'Activa' ?
                                                <p className="cardj__body__header__time">
                                                    <i className='far fa-clock cardj__body__header__time__icon'></i> Tiempo restante: {calculateTime(task.time)} hrs.
                                                </p>
                                                : null
                                        }
                                    </div>

                                    <div className="cardj__body__body">
                                        <div className="cardj__body__body__cnt-header">
                                            <ChangeTitleTask setTasks={setTasks} tasks={tasks} task={task} />
                                            <Option setSeeTask={setSeeTask} task={task} setDeleteTask={setDeleteTask}></Option>
                                        </div>
                                        <ChangeDescription setTasks={setTasks} tasks={tasks} task={task} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <TestModal showModal={showModal} setShowModal={setShowModal}>
                <ChangeAssigned assigned={assigned} setAssigned={setAssigned} changedAssigned={changedAssigned} setChangedAssigned={setChangedAssigned} />
            </TestModal>

            <TestModal showModal={showModalCreate} setShowModal={setShowModalCreate}>
                <TaskCreate setShowModal={setShowModalCreate} tasks={tasks} setTasks={setTasks} />
            </TestModal>

            <TestModal setSeeTask={setSeeTask} showModal={showModalDetail} setShowModal={setShowModalDetail}>
                <TaskDetail task={seeTask}/>
            </TestModal>

            <ButtonPlus setClick={setShowModalCreate} />

        </div>
    )
}
