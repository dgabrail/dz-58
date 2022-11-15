import React from 'react';
interface  Props {
    show: boolean;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, onClose}) => {
    return (
        <>
            <div className="modal show" style={{display: show ? "block" : "none"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">Title</h1>
                            <button className=" btn btn-close" onClick={onClose}/>
                        </div>
                        Content
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;