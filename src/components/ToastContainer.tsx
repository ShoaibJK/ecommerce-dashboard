import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToasterContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      aria-live="assertive"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className={"text-black"}
    />
  );
};

export default ToasterContainer;
