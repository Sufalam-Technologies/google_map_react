import { Toast, ToastContainer } from "react-bootstrap";

const Toaster = ({ variant, message, isToastShow, handleToasterHide }) => {
  return (
    <ToastContainer className="p-3" position={"top-end"}>
      <Toast
        className="d-inline-block m-1"
        bg={variant}
        onClose={() => handleToasterHide()}
        show={isToastShow}
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Sufalamtech</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className={"text-white"}>
          {`You have visited : `}
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toaster;
