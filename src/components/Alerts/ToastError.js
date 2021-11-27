import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { BiError } from "react-icons/bi";
import { Toast } from "bootstrap/dist/js/bootstrap.min.js";

const ToastError = () => {
  const response = useSelector((state) => state.response);
  var [toast, setToast] = useState(false);
  const toastRef = useRef();

  useEffect(() => {
    var myToast = toastRef.current;
    var bsToast = Toast.getInstance(myToast);

    if (!bsToast) {
      // initialize Toast
      bsToast = new Toast(myToast);
      // hide after init
      bsToast.hide();
      // render
      setToast(true);
    } else {
      // toggle
      toast ? bsToast.show() : bsToast.hide();
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
      <div
        ref={toastRef}
        className="toast bg-warning"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        {response.error !== "" && (
          <>
            <div className="toast-header ">
              <BiError />
              <strong className="me-auto fw-bolder">Error</strong>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">{response.error}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToastError;
