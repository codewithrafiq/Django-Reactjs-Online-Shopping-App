import { Container } from "@material-ui/core";
import NabBar from "../components/NabBar";
import Sliders from "../components/Slider";
import TrandingProducts from "../components/TrandingProducts";
import CategorysName from "../components/CategorysName";
import MostViewProduct from "../components/MostViewProduct";
import CategoryProducts from "../components/CategoryProducts";
import BaradsName from "../components/BaradsName";

const HomePage = () => {
  return (
    <>
      <Sliders />
      <Container>
        <TrandingProducts />
        <CategorysName />
        <MostViewProduct />
        <CategoryProducts />
        <BaradsName />
      </Container>
    </>
  );
};

export default HomePage;
