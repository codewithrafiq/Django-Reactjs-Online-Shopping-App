import { Grid } from "@material-ui/core";
import React from "react";
import SingleProduct from "./SingleProduct";

const AllProducts = ({ products }) => {
  return (
    <Grid container>
      {products?.map((item, i) => (
        <Grid key={i} item md={2} sm={4}>
          <SingleProduct product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllProducts;
