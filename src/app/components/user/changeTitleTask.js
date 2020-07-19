import React, { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export const ChangeTitleTask = (props) => {
    const { task, tasks, setTasks } = props;
    const [changeTitle, setChangeTitle] = useState(false);
    const [title, setTitle] = useState(null);
    const [errorTitle, setErrorTitle] = useState(null);

    const editTitle = () => {
        setChangeTitle(true);
        setTimeout(() => {
            let textArea = document.getElementById('textarea');
            let limit = 80;
            textArea.oninput = function () {
                textArea.style.height = "";
                textArea.style.height = Math.min(textArea.scrollHeight, limit) + "px";
            };
        }, 100);
    }

    const clickOutside = () => {
        if (title === null) {
            setChangeTitle(false);
        } else if (title === '') {
            setErrorTitle('Porfavor escribe un titulo');
        } else {
            setErrorTitle(null);
            setChangeTitle(false);
            let indexOf = tasks.findIndex((item) => item.id === task.id);
            const newItems = [...tasks];
            newItems[indexOf].title = title;
            setTasks(newItems);
        }
    }

    return (
        <div className="chg-title">
            {!changeTitle ?
                <p onClick={editTitle} className="cardj__body__body__cnt-header__title">{task.title}
                    <span className="span-edit">(Editar)</span>
                </p> :
                <div>
                    <ClickAwayListener onClickAway={clickOutside}>
                        <input id="textarea" onKeyUp={(e) => setTitle(e.target.value)} defaultValue={task.title}></input>
                    </ClickAwayListener>
                    <p className="chg-title__text-error">{errorTitle}</p>
                </div>
            }
        </div>
    )
}
