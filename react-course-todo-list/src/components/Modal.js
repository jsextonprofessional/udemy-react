function Modal(props) {

  function cancelHandler() {
    props.onCancel();
    console.log("Canceling...");
  }

  function confirmHandler() {
    props.onConfirm();
    console.log("Confirming...");
  }

  return (
  <div className="modal">
    <p>Are you sure?</p>
    <button className="btn" onClick={cancelHandler}>Cancel</button>
    <button className="btn btn--alt" onClick={confirmHandler}>Confirm</button>
  </div>
  )
}

export default Modal;