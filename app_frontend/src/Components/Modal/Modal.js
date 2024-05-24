import React from 'react'

export default function Modal({ modalAction, onClose }) {
    const handleModalActions = () => {
        modalAction()
        onClose()
    }
    return (
        <>
            <div className="modal show d-block" role='dialog' id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role='document'>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Logout confirmation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to log-out?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleModalActions}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>


        </>
    )
}
