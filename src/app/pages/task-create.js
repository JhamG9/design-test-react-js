import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { usersData } from '../data/users';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


export const TaskCreate = (props) => {
    const { tasks, setTasks, setShowModal } = props;
    const { handleSubmit, register, errors } = useForm();
    const [temporaryAssigned, setTemporaryAssigned] = useState(null);

    const onSubmit = values => {
        Swal.fire({
            title: 'Tarea creada satisfactoriamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })

        values.assigned = temporaryAssigned;
        values.state = 'Activa';
        values.time = values.time.replace("T", " ") + ":00";
        values.id = (tasks.length + 1);

        setTasks([...tasks, values]);
        setShowModal(false);
    }


    const loadDate = () => {
        let date = new Date();
        let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        let month = date.getMonth()+1 > 9 ? (date.getMonth()+1) : "0" + (date.getMonth()+1);
        let hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        let minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        return `${date.getFullYear()}-${month}-${day}T${hours}:${minutes}`;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="cnt-create-task">
                <h3>Añadir tarea</h3>
                <hr />
                <div className="cnt-create-task__item">
                    <p>Titulo: </p>
                    <input name="title" ref={register({ minLength: 5, required: true })} />
                    <p className="err-validation" >{errors.title?.type === 'required' && "El campo titulo es obligatorio"}</p>
                    <p className="err-validation" >{errors.title?.type === 'minLength' && "Debe de ingresar un titulo mayor a 5 caracteres"}</p>
                </div>

                <div className="cnt-create-task__item">
                    <p>Descripcion: </p>
                    <input name="description" ref={register({ required: true })} />
                    <p className="err-validation" >{errors.description?.type === 'required' && "Debe de ingresar una descripción para la tarea"}</p>
                </div>

                <div className="cnt-create-task__item">
                    <p>Fecha entrega: </p>
                    <TextField
                        name="time"
                        inputRef={
                            register({ required: true })
                        }
                        type="datetime-local"
                        defaultValue={loadDate()}
                        style={{ width: '100%', textAlign: 'center' }}
                    />
                    <p className="err-validation" >{errors.time?.type === 'required' && "Debe de especificar una fecha de entrega de la tarea"}</p>
                </div>

                <div className="cnt-create-task__item-autocomplete">
                    <p>Asigna un usuario: </p>
                    <Autocomplete
                        options={usersData}
                        getOptionLabel={(option) => option.name}
                        style={{ width: '100%', border: 'none' }}
                        onChange={(event, newValue) => {
                            setTemporaryAssigned(newValue);
                        }}
                        defaultValue={(option) => option}
                        renderInput={(params) => <TextField name="assigned" inputRef={
                            register({ required: true })
                        } {...params}
                            variant="outlined" />}
                    />
                    <p className="err-validation" >{errors.assigned && "Debe de especificar un usuario"}</p>
                </div>
                <button type="submit" style={{ padding: '5px 20px' }} className="btn-default btn-right">Añadir</button>
            </div>
        </form>
    )
}
