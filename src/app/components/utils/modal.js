import React from 'react'

export const TestModal = (props) => {
    const { showModal, setShowModal, children, setSeeTask } = props;

    const closeOrOpenMenu = () => {
        setShowModal(!showModal);
        if(setSeeTask){
            setSeeTask(null);
        }
    }

    return (
        <div className={'modal fade show  ' + (showModal ? 'show-modal animate__animated animate__fadeIn' : '')} id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button onClick={closeOrOpenMenu} type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
