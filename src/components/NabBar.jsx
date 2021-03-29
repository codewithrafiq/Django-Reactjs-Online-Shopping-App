import { AppBar, Button, Grid, IconButton, InputBase, Paper, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'

const NabBar = () => {
  const [text, setText] = useState('');
  const history = useHistory();
  const search = () => {
    history.push(`/q-${text}`);
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container>

          <Button onClick={() => history.push("/")} color="inherit">
            <Typography>CWR-SHOP</Typography>
          </Button>

          <Paper style={{ margin: '0 20px' }}>
            <InputBase
              value={text}
              placeholder="Search Now..."
              style={{ padding: '10px' }}
              onChange={(e) => setText(e.target.value)}
            />
            <IconButton
              disabled={text.length <= 0 ? true : false}
              onClick={search}
            >
              <SearchIcon />
            </IconButton>
          </Paper>

        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
