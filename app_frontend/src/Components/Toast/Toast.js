import React from "react";

export default function Toast(props) {

  return (
    <>
      <div className="toast align-items-center text-bg-primary border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            {props.errorMessage}
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={props.onClose}></button>
        </div>
      </div>
    </>
  );
}
