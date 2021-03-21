import { Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AllProducts from "../components/common/AllProducts";
import { domain } from "../env";

const SingleBrandsProducts = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  useEffect(() => {
    const getSingleBrand = async () => {
      await axios({
        url: `${domain}/api/singlebrands/${id}/`,
        method: "GET",
      }).then((response) => {
        setBrand(response.data[0]);
        console.log("SingleBrandsProducts===", response.data);
      });
    };
    getSingleBrand();
  }, []);
  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">{brand?.title}</Typography>
        <Typography variant="p">{brand?.details}</Typography>
        <img
          style={{ width: "100%", padding: "10px" }}
          alt={brand?.title}
          src={brand?.logo}
        />
        <AllProducts products={brand?.products} showall={true} />
      </Grid>
    </Container>
  );
};

export default SingleBrandsProducts;
