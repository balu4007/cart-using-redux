import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CartIteam from "./cartIteam";
import { GetContext } from "../context/GlobalProvider";
import { useEffect } from "react";

function Cart() {
  const {
    cartDispatcher,
    cartState: { cartIteams },
  } = GetContext();
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let total = 0;
    cartIteams.forEach((element) => {
      total += element.price * element.quantity;
    });
    setTotalAmount(total.toFixed(2));
  }, [cartIteams]);
  return (
    <Grid container>
      <Grid item style={{ width: "60%" }}>
        {cartIteams.map((iteam) => {
          return <CartIteam iteam={iteam} dispatcher={cartDispatcher} />;
        })}
      </Grid>
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Amount:{totalAmount}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Cart;
