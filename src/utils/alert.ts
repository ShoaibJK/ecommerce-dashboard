import { toast } from 'react-toastify';

const commonError = 'OOPS! Something Went Wrong!';
const activeToasts = new Map();

export const showAlert = (type:number, message = commonError) => {
    if (activeToasts.has(message)) return; // Prevent duplicate toasts with the same message

    let toastFunction;
    switch (type) {
        case 1:
            toastFunction = toast.success;
            break;
        case 2:
            toastFunction = toast.error;
            break;
        case 3:
            toastFunction = toast.info;
            break;
        case 4:
            toastFunction = toast.warn;
            break;
        default:
            return;
    }

    const id = toastFunction(message, {
        onClose: () => activeToasts.delete(message)
    });

    activeToasts.set(message, id);
};
