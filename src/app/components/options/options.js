import React, { useState } from 'react';
import Swal from 'sweetalert2'

export default function Option(props) {
    const { setDeleteTask, setSeeTask, task } = props;
    const [showOptions, setShowOptions] = useState(false);
    const changeStateOptions = () => {
        setShowOptions(!showOptions);
    }

    const deleteDeteleTask = (task) => {
        Swal.fire({
            title: '¿Estás segur@ de eliminar la tarea?',
            text: 'Una vez eliminada no habra forma de recuperarla',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                setDeleteTask(task);
            }
        })
    }

    return (
        <div>
            <i className="fas fa-ellipsis-v points" onClick={changeStateOptions}></i>
            {showOptions ?
                <div className="options animate__animated animate__fadeIn">
                    <p className="options__text options__text--active" onClick={() => { setSeeTask(task); changeStateOptions() }}>
                        <i className="fas fa-eye options__text__icon"></i> Ver tarea
                    </p>
                    <p className="options__text" onClick={() => deleteDeteleTask(task)}>
                        <i className="far fa-trash-alt options__text__icon"></i> Borrar
                    </p>
                </div>
                : ''
            }
        </div>


    )
}