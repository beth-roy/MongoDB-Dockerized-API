import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import axios from "axios";
  import { useEffect, useState } from "react";
  
  export default function UserDisplay(props) {
    const [allUsers, setAllUsers] = useState([]);
    const [displayPassword, setDisplayPassword] = useState(false);
    const containerStyle = {
      border: "1px solid #08395F",
      padding: "10px",
    };
    const headerStyle = { color: "#08395F" };

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios(
              'http://localhost:8000/users/retrieve',
            );
      console.log(result.data)
            setAllUsers(result.data);
          };
      
          fetchData();
    
        
      });

   
  
  
    return (
      <Container maxWidth="md" style={containerStyle}>
        <h1 style={headerStyle}>User List</h1>
        <Button
          variant="outline"
          style={{ backgroundColor: "#08395F", color: "#FFFFFF" }}
          onClick={() => setDisplayPassword(!displayPassword)}
        >
          Toggle Password
        </Button>
        <br></br>
        <br/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell>
                    {displayPassword
                      ? row.password
                      : row.password.split("").map(() => "*")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
  