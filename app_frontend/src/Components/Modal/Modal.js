import React from 'react'
import '../../App.css'

export default function Modal(props) {
    const handleModalActions = (event) => {
        if(props.isAForm){
            props.modalAction(event)
        }
        else{
            props.modalAction()
        }
        props.onClose()
    }
    return (
        <>
            <div className="modal show d-block" role='dialog' id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role='document'>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.heading}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
                        </div>
                        {!props.isAForm && <div className="modal-body">
                            Are you sure you want to log-out?
                        </div>}
                        {props.isAForm && <div className="modal-body">
                            <form onSubmit={handleModalActions}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={props.formData.email} onChange={props.handleFormChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name='name' value={props.formData.name} onChange={props.handleFormChange}/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputMobile" className="form-label">Mobile Number</label>
                                    <input type="tel" className="form-control" id="exampleInputMobile" aria-describedby="mobileHelp" name='mobileNumber' onChange={props.handleFormChange} />
                                </div>
                                <button type="submit" className="btn btn-primary app-primary-color">update</button>
                            </form>
                        </div>
                        }
                        <div className="modal-footer">
                            <button type="button" className="btn app-tertiary-color" data-bs-dismiss="modal" onClick={props.onClose}>Cancel</button>
                            {!props.isAForm && <button type="button" className="btn btn-primary app-primary-color" onClick={handleModalActions}>Logout</button>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>


        </>
    )
}
