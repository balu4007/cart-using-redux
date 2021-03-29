import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getProducts } from "../context/action/productsAction";
import Iteamcard from "./Iteamcard";

function Iteams() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        console.log(data);
        setProducts([...data]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Grid justify="center" container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <Iteamcard iteam={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Iteams;
