import React from "react";
import iconSuccess from "../assets/images/success.svg";

function Modal(props) {
  function handleModal() {
    props.onClose(); // Close the modal

  }
  return (
    <div className="modal-outer-container">
      <div className="modal-inner-container">
        <div className="modal-contents">
          <img src={iconSuccess} alt="icon-success" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span>{props.email}</span>{" "}
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button className="modal-button" onClick={handleModal}>
            Dismiss Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
