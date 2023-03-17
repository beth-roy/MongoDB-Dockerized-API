import { Alert, Snackbar } from "@mui/material";
import { useContext, useEffect } from "react";
import { ToastContext } from "../contexts/ToastContext";

export default function Toast() {
  const {
    open,
    setOpen,
    alertContent,
    setAlertContent,
    severity,
    setSeverity,
  } = useContext(ToastContext);

  const handleToastClose = (event) => {
    setOpen(false);
  };

//   useEffect(() => {
//     console.log("Called");
//   },[])

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleToastClose}>
      <Alert
        onClose={handleToastClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {alertContent}
      </Alert>
    </Snackbar>
  );
}
