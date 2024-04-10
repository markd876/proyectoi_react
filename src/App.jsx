import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ByciclesTypes from "./components/ByciclesTypes";
import Promos from "./components/Promos";
import FeaturedBikes from "./components/FeaturedBikes";
import FeaturedProds from "./components/FeaturedProds";
import { NextUIProvider } from "@nextui-org/react";
import { Carousel } from "antd";
import { UserContext, UserContextProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";

function App() {

  const onChange = (currentSlide) => {
    
  };
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <CartProvider>
        <Header />
        {
          
        }
        <Carousel afterChange={onChange} autoplay>
          <div>
            <img
              src="./D_NQ_NP_804763-MLA51468815069_09.jpg"
              alt=""
              className="imgCarousel"
            />
          </div>
          <div>
            <img src="./banner-pirelli_2.jpg" alt="" className="imgCarousel" />
          </div>
          <div>
            <img src="./wahoo.jpg" alt="" className="imgCarousel" />
          </div>
          <div>
            <img src="./liquidacion-total.jpg" alt="" className="imgCarousel" />
          </div>
        </Carousel>
        <Promos />
        <ByciclesTypes />
        <FeaturedBikes />
        
        <FeaturedProds />
        <Footer />
    </CartProvider>
  );
}

export default App;
