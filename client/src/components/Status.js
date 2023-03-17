import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../contexts/ToastContext";
import axios from "axios";

export default function Status() {
  const [isContainerActive, setIsContainerActive] = useState(false);
  const {
    open,
    setOpen,
    alertContent,
    setAlertContent,
    severity,
    setSeverity,
  } = useContext(ToastContext);

  const containerStyle = {
    border: "1px solid #08395F",
    padding: "10px"
  };
  const buttonDivStyle = {
    margin: "10px",
  };
  const startContainerStyle = {
    backgroundColor: "#08395F",
    color: "#FFFFFF",
    marginRight: "10px",
  };
  const stopContainerStyle = { backgroundColor: "red", color: "#FFFFFF" };
  const disabledButtonStyle = {
    backgroundColor: "gray",
    color: "#FFFFFF",
    marginRight: "10px",
  };
  const runningStyle = {color: "green"}
  const stoppedStyle = {color: "red"}
  const headerStyle = {color: "#08395F"}

  useEffect(() => {
    getContainerStatus();
  }, []);

  const getContainerStatus = () => {
    axios.get("http://localhost:8000/mongo/status").then((response) => {
        if(response.data.state==='running')
       {
        setIsContainerActive(true);
       }
       else{
        setIsContainerActive(false);
       }
    })
    
  };

  const startContainer = () => {
    axios.get("http://localhost:8000/mongo/start").then((response) => {
        if(response.data.state==='started')
       {
        setOpen(true);
        setSeverity("success");
        setAlertContent("Started Container")
        setIsContainerActive(true);
       }
       
    }).catch((err) => {
        setOpen(true);
        setSeverity("error");
        setAlertContent("Could not start container");
    });

    
  };

  const stopContainer = () => {
    axios.get("http://localhost:8000/mongo/stop").then((response) => {
        if(response.data.state==='stopped')
       {
        setOpen(true);
        setSeverity("success");
        setAlertContent("Stopped Container");
        setIsContainerActive(false);
       }
        
    }).catch((err) => {
        setOpen(true);
        setSeverity("error");
        setAlertContent("Could not stop container");
    });

    
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <h2 style={headerStyle}>Docker Container Status</h2>
      <h4 style={isContainerActive ? runningStyle : stoppedStyle}>{isContainerActive ? 'Running' : 'Stopped'}</h4>
      <div style={buttonDivStyle}>
        <Button
          disabled={isContainerActive}
          variant="contained"
          style={isContainerActive ? disabledButtonStyle : startContainerStyle}
          onClick={startContainer}
        >
          Start Container
        </Button>
        <Button
          disabled={!isContainerActive}
          variant="contained"
          style={isContainerActive ? stopContainerStyle : disabledButtonStyle}
          onClick={stopContainer}
        >
          Stop Container
        </Button>
      </div>
    </Container>
  );
}
