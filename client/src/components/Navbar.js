import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Navbar() {
  const navBarStyle = {
    backgroundColor: "#08395F",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={navBarStyle}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Parallel Works Assisgnment
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
