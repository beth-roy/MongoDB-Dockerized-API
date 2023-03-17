import { createContext, useState } from "react";

export const ToastContext = createContext();

const ToastContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [severity, setSeverity] = useState("success");

  return (
    <ToastContext.Provider
      value={{
        open,
        setOpen,
        alertContent,
        setAlertContent,
        severity,
        setSeverity,
      }}
    >
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
