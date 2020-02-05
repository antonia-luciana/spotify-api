import React from "react";
import ReactDOM from "react-dom";
import Button from "../shared/Button";

const Modal = props => {
  const {
    title,
    content,
    onClickOk,
    okLabel,
    okClass,
    onClickCancel,
    cancelLabel,
    cancelClass
  } = props;
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title || "Title"}</div>
        <div className="content">
          {content || "Are you sure you want to proceed?"}
        </div>
        <div className="actions">
          <Button
            onClick={onClickOk}
            label={okLabel || "OK"}
            className={okClass || "ui button primary"}
          />
          <Button
            onClick={onClickCancel}
            label={cancelLabel || "Cancel"}
            className={cancelClass || "ui button secondary"}
          />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
