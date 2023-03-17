import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import axios from "axios";
import { useContext, useState } from "react";
import { ToastContext } from "../contexts/ToastContext";

export default function AddUser({addUserToList}) {
  const [user, setUser] = useState({ username: "", password: "" });
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
    padding: "10px",
  };
  const addButtonStyle = {
    backgroundColor: "#08395F",
    color: "#FFFFFF",
    marginRight: "10px",
  };
  const clearButtonStyle = {
    backgroundColor: "red",
    color: "#FFFFFF",
  };
  const headerStyle = {color: "#08395F"}


  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const addUser = () => {
    if (validateUser()) {
        axios
          .post("http://localhost:8000/users/add",user)
          .then((data) => {
            setOpen(true);
            setSeverity("success");
            setAlertContent("Added User");
            addUserToList(user);
            clearDetails()
          })
          .catch((err) => {
            setOpen(true);
            setSeverity("error");
            setAlertContent("Could Not add user");
          });
            
    }
  };

  const clearDetails = () => {
    setUser({ username: "", password: "" });
  };

  const validateUser = () => {
    return user.username !== "" && user.password !== "";
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <h1 style={headerStyle}>Add User</h1>
      <TextField
        variant="outlined"
        label="Username"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <div>
        <Button style={addButtonStyle} variant="contained" onClick={addUser}>
          Add User
        </Button>
        <Button
          style={clearButtonStyle}
          variant="contained"
          onClick={clearDetails}
        >
          Clear
        </Button>
      </div>
    </Container>
  );
}
