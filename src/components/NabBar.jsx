import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const NabBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography>CWR-SHOP</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
