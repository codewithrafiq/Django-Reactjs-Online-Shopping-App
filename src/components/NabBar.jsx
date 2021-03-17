import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const NabBar = () => {
  const history = useHistory();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button onClick={() => history.push("/")} color="inherit">
          <Typography>CWR-SHOP</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
