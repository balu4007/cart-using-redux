import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddCircle, Delete, PlusOne, RemoveCircle } from "@material-ui/icons";
import React from "react";
import {
  Add_Iteam_To_Cart,
  Remove_Iteam_From_Cart,
  Reduce_Count_From_Cart,
} from "../context/constants";

function CartIteam({ iteam, dispatcher }) {
  const increaseQuantity = () => {
    dispatcher({ type: Add_Iteam_To_Cart, payload: iteam });
  };
  const removeIteam = () => {
    dispatcher({ type: Remove_Iteam_From_Cart, payload: iteam });
  };

  const decreaseQuantity = () => {
    if (iteam.quantity === 1) {
      dispatcher({ type: Remove_Iteam_From_Cart, payload: iteam });
    } else {
      dispatcher({ type: Reduce_Count_From_Cart, payload: iteam });
    }
  };
  return (
    <div>
      <Card style={{ margin: "15px" }}>
        <CardContent>
          <Grid
            container
            spacing={0}
            alignItems="center"
            alignContent="center"
            justify="center"
            direction="row"
            style={{ margin: "10px" }}
          >
            <Grid item style={{ width: "15%" }}>
              <img
                style={{ width: "75px" }}
                src={iteam.image}
                alt={iteam.title}
              ></img>
            </Grid>
            <Grid item style={{ width: "40%" }}>
              <Typography variant="h5">{iteam.title}</Typography>
            </Grid>
            <Grid item style={{ width: "20%" }}>
              <Grid
                container
                item
                justify="center"
                alignItems="center"
                direction="row"
              >
                <Grid item>
                  <IconButton onClick={increaseQuantity}>
                    <AddCircle />
                  </IconButton>
                </Grid>
                <Grid item justify="center">
                  <Typography variant="h5">{iteam.quantity}</Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={decreaseQuantity}>
                    <RemoveCircle />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: "10%" }}>
              <Typography variant="h5">{iteam.price}</Typography>
            </Grid>
            <Grid item style={{ width: "5%" }}>
              <IconButton onClick={removeIteam}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default CartIteam;
