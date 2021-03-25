import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {domain} from '../env'
import Headline from "./common/Headline";
import SingleProduct from "./common/SingleProduct";

const MostViewProduct = () => {
  const [products, setProducts] = useState(null);
  useEffect(()=>{
    const getmostviewsproducts = async()=>{
      await axios({
        url:`${domain}/api/mostviewproducts/`,
        method:'GET'
      }).then(response=>{
        setProducts(response.data)
        console.log("MostViewProduct===",response.data);
      })
    }
    getmostviewsproducts()

  },[])
  return (
    <Grid container spacing={2}   >
      <Headline title="Most Views" subtitle="Products" />
      {
        products?.map((item,i)=><Grid key={i} md={2} sm={4} item>
          <SingleProduct product={item?.product} />
        </Grid>)
      }
    </Grid>
  );
};

export default MostViewProduct;
