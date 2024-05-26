import React, { useEffect, useRef } from "react";

export default function Toast({ message }) {
  const toastRef = useRef(null);

  useEffect(() => {
    const toastElement = toastRef.current;
    const bootstrapToast = window.bootstrap.Toast;
    if (toastElement && bootstrapToast) {
      const toast = new bootstrapToast(toastElement, {
        autohide: true,
        delay: 3000,
      });
      toast.show();
    }
  }, [message]);
  return (
    <div>
      <div
        ref={toastRef}
        className="toast align-items-center text-bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}
