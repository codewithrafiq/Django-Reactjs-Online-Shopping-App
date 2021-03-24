import axios from "axios";
import React, { useEffect, useState } from "react";
import {domain} from '../env'
import Carousel from 'react-material-ui-carousel'
import SliderItem from "./common/SliderItem";


const Sliders = () => {
  const [slides, setSlides] = useState(null);
  useEffect(()=>{
    const getSlider = async()=>{
      await axios({
        url:`${domain}/api/sliders/`,
        method:'GET'
      }).then(response=>{
        setSlides(response.data)
        console.log('Sliders===',response.data);
      })
    }
    getSlider()
  },[])
  return (
  <Carousel
    interval= '1000'
    stopAutoPlayOnHover = 'true'
  >
    {
      slides?.map((item,i)=><SliderItem key={i} item={item} />)
    }
  </Carousel>
  );
};

export default Sliders;
