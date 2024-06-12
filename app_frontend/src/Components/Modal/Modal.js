import React from 'react'
import '../../App.css'

export default function Modal({ modalAction, onClose, heading, isAForm }) {
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
                            <h5 className="modal-title" id="exampleModalLabel">{heading}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                        </div>
                        {!isAForm && <div className="modal-body">
                            Are you sure you want to log-out?
                        </div>}
                        {isAForm && <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputMobile" className="form-label">Mobile Number</label>
                                    <input type="tel" className="form-control" id="exampleInputMobile" aria-describedby="mobileHelp" />
                                </div>
                            </form>
                        </div>
                        }
                        <div className="modal-footer">
                            <button type="button" className="btn app-tertiary-color" data-bs-dismiss="modal" onClick={onClose}>Cancel</button>
                            <button type="button" className="btn btn-primary app-primary-color" onClick={handleModalActions}>{isAForm? 'Update': 'Logout'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>


        </>
    )
}
