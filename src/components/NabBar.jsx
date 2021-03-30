import { AppBar, Badge, Button, Card, ClickAwayListener, Grid, IconButton, InputBase, MenuItem, Paper, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { useStateValue } from "../state/stateProvider";

const NabBar = () => {
  const [profile, { }] = useStateValue();
  console.log("NabBar===", profile);

  const [text, setText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
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

        <Button color='inherit' onClick={() => { history.push('/login') }} >Login</Button>

        <IconButton color="inherit">
          <Badge badgeContent="3" color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <IconButton onClick={() => setShowMenu(true)} color="inherit">
          <AccountCircleRoundedIcon />
        </IconButton>

        {
          showMenu &&
          <ClickAwayListener onClickAway={() => setShowMenu(false)}>
            <Card style={{
              position: 'fixed',
              top: '50px',
              right: '10px'
            }}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Card>
          </ClickAwayListener>
        }
      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
