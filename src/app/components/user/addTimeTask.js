import React, { useState } from 'react';
import { TestModal } from '../utils/modal';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';

export const AddTimeTask = (props) => {
    const { tasks, setTasks, task } = props;
    const [showModal, setShowModal] = useState(false);
    let dateTemporary = null;
    const openModal = () => {
        setShowModal(true);
    }

    const sumbitDate = () => {
        let date = dateTemporary.replace("T", " ");
        let now = new Date();
        let dt = new Date(date);

        if (now.getTime() <= dt.getTime()) {
            setShowModal(false);

            Swal.fire({
                title: `Fecha actualizada satisfactoriamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            let indexOf = tasks.findIndex((item) => item.id === task.id);
            const newItems = [...tasks];
            newItems[indexOf].time = date;
            setTasks(newItems); 
        } else {
            Swal.fire({
                title: `No puedes seleccionar una fecha menor a hoy`,
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    const transformDateFormatCalendar = () => {
        dateTemporary = task.time.replace(" ", "T");
        return task.time.replace(" ", "T");
    }

    return (
        <div>
            <button type="button" className="btn-default" onClick={() => openModal()}>Agregar tiempo</button>
            <TestModal showModal={showModal} setShowModal={setShowModal}>
                <div className="addtime">
                    <h3>Cambia la fecha de entrega</h3>
                    <hr />
                    <TextField
                        label="Selecciona una fecha"
                        type="datetime-local"
                        defaultValue={transformDateFormatCalendar()}
                        style={{ width: '100%', textAlign: 'center' }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={(e) => dateTemporary = e.target.value}
                    />
                    <button onClick={() => sumbitDate()} className="btn-default btn-right">Actualizar</button>
                </div>
            </TestModal>
        </div>
    )
}
