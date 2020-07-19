import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { usersData } from '../../data/users';
import Swal from 'sweetalert2';

export default function ChangeAssigned(props) {
    const { assigned, setChangedAssigned } = props;
    const [temporaryAssigned, setTemporaryAssigned] = useState(null);

    const onSubmit = () => {
        if (temporaryAssigned === null || temporaryAssigned.name === assigned.name) {
            Swal.fire({
                title: 'Especifica un usuario diferente.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
            return;
        }
        setChangedAssigned(temporaryAssigned);
    }

    
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Actualizar encargado</h3>
            <hr />
            <Autocomplete
                options={usersData}
                getOptionLabel={(option) => option.name}
                style={{ width: '100%' }}
                onChange={(event, newValue) => {
                    setTemporaryAssigned(newValue);
                }}
                value={assigned}
                renderInput={(params) => <TextField {...params}
                    label="Selecciona un encargado" variant="outlined" />}
            />
            <button onClick={onSubmit} className="btn btn-default btn-right">Actualizar</button>
        </div>

    );
}