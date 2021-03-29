import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import React from "react";
import { GetContext } from "../context/GlobalProvider";
import useStyle from "../style";

function Header() {
  const history = useHistory();
  const classes = useStyle();
  const { cartState } = GetContext();
  console.log(cartState);
  return (
    <AppBar className={classes.headerRoot} position="static">
      <Toolbar>
        <Typography className={classes.grow} variant="h6">
          <Link style={{ color: "white" }} to="/">
            BlinkCart
          </Link>
        </Typography>

        <div className={classes.cartMenu} onClick={() => history.push("/cart")}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <ShoppingCart style={{ color: "white" }} />
          </IconButton>
          <Typography>{cartState.cartIteams.length}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
