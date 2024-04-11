import React, {useEffect, useState} from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  Divider
} from "@nextui-org/react";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";
import { useCart } from "../hooks/useCart";
import axios from "../api/axios";


const Featured = () => {

  const {cart, addToCart} = useCart()
  const navigate = useNavigate()
  const [featProds, setfeatProds] = useState()

  useEffect(()=>{
    try {
      let id = 2
      axios.get(`/featproducts/${id}`,{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      ).then((response)=>{
        setfeatProds(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  },[])
  const buyNow = (producto) =>{
    addToCart(producto)
    navigate('/carrito')
  }

  return (
    <>
      <Divider className="my-8"/>
      <div className="flex justify-center mb-8">
      <img src="/2560px-Garmin_logo_2006.svg.png" alt="" width={500}/>
      </div>
      <h4 className="font-bold text-center text-xl mb-8">Toda la linea Garmin</h4>
      <div className="flex flex-row gap-5 mx-auto items-center justify-center ">
        {
          featProds?.length > 0 && featProds?.map((producto, i) =>{
            return(
              <Card className="py-4 max-w-64" key={i}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col ">
                <div className="text-center min-h-28 text-center">
                  <a href={'/producto/' + producto.id}>
                <h4 className="font-bold text-large text-wrap text-center">
                  {producto.nombre}
                  </h4>
                  </a>
                  <small className="text-default-500 text-center">{producto.marca}</small>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="flex justify-center">
                <a href={'/producto/' + producto.id}>
                  <Image
                    alt="Foto de producto"
                    className=""
                    src={producto.imagen}
                  />
                  </a>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col gap-1.5 justify-center flex-grow align-center text-center">
                  <h4 className="font-bold text-large">$ {Number(producto?.precio).toLocaleString()}</h4>
                  <Button color="primary" startContent={<FaCartPlus />} onClick={() => addToCart(producto)}>
                    <p className="font-bold text-large">Añadir al carrito</p>
                  </Button>
                  <Button color="success" startContent={<FaCartShopping />}>
                    <a href={'/producto/' + producto.id}>
                    <p className="font-bold text-large">Comprar</p>
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            )          
          })
        }
      </div>
    </>
  );
};

export default Featured;