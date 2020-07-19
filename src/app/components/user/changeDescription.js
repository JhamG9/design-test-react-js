import React, { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export const ChangeDescription = (props) => {
    const { task, tasks, setTasks } = props;
    const [ChangeDescription, setChangeDescription] = useState(false);
    const [description, setDescription] = useState(null);
    const [errorDescription, setErrorDescription] = useState(null);

    const editTitle = () => {
        setChangeDescription(true);
    }

    const clickOutside = () => {
        if (description === null) {
            setChangeDescription(false);
        } else if (description === '') {
            setErrorDescription('Porfavor escribe una descripción');
        } else {
            setErrorDescription(null);
            setChangeDescription(false);
            let indexOf = tasks.findIndex((item) => item.id === task.id);
            const newItems = [...tasks];
            newItems[indexOf].description = description;
            setTasks(newItems);
        }
    }

    return (
        <div className="chg-title">
            {!ChangeDescription ?
                <div>
                    <p onClick={editTitle} className="cardj__body__description">{task.description}
                    <span className="span-edit">(Editar)</span>
                    
                    </p>
                </div>
                :
                <div>
                    <ClickAwayListener onClickAway={clickOutside}>
                        <textarea id="textarea" onKeyUp={(e) => setDescription(e.target.value)} defaultValue={task.description}></textarea>
                    </ClickAwayListener>
                    <p className="chg-title__text-error">{errorDescription}</p>
                </div>
            }
        </div>
    )
}
