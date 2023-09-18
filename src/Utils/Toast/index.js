import {toast} from "react-toastify";

export const PromiseToast = (
    promise,
    message
) => {
    return toast.promise(promise, message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        rtl: true,
        theme: "dark",
        style: {fontFamily: "Vazir", fontSize: 14},
    });
};
