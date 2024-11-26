import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonContent }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="p-7 w-30 md:w-90 rounded-md  backdrop:bg-slate-300 backdrop:bg-opacity-80"
    >
      {children}

      <form method="dialog" className="text-right mt-4">
        {buttonContent && <Button>{buttonContent}</Button>}
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
