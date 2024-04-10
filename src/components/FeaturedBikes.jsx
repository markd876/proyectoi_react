import React, {useEffect, useState} from "react";
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
  const [featBikes, setfeatBikes] = useState()
  const buyNow = (producto) =>{
    addToCart(producto)
    navigate('/carrito')
  }
  useEffect(()=>{
    try {
      let id = 1
      axios.get(`/featproducts/${id}`,{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      ).then((response)=>{
        setfeatBikes(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  },[])
  

  return (
    <React.Fragment>
      <Divider className="my-8"/>
      <h4 className="font-bold text-center text-xl mb-4">Nuevos Ingresos</h4>
      <div className="flex justify-center mb-4">
      <img src="/Giant-Logo-2022.png" alt="" width={500}/>
      </div>
      <div className="flex flex-row gap-5 mx-auto items-center justify-center ">
        {
          featBikes?.length > 0 && featBikes?.map((bicicleta, i) =>{
            return(
              <React.Fragment>
              
              <Card className="py-4 max-w-64" key={i}>
              <CardHeader className="pb-0 pt-2 px-4 flex-col">
                <div className="text-center min-h-28">
                  <h4 className="font-bold text-large text-wrap text-center">
                  <a href={'/producto/' + bicicleta.id}>{bicicleta.nombre}</a>
                  </h4>
                  <small className="text-default-500 text-center">{bicicleta.marca}</small>
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="flex justify-center">
                <a href={'/producto/' + bicicleta.id}>
                  <Image
                    alt="Foto de producto"
                    className=""
                    src={bicicleta.imagen}
                  />
                  </a>
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col gap-1.5 justify-center flex-grow align-center text-center">
                  <h4 className="font-bold text-large">$ {Number(bicicleta?.precio).toLocaleString()}</h4>
                  <Button color="primary" startContent={<FaCartPlus />} onClick={() => addToCart(bicicleta)}>
                    <p className="font-bold text-large">Añadir al carrito</p>
                  </Button>
                  <Button color="success" startContent={<FaCartShopping />} onClick={() => buyNow(producto)}>
                    <p className="font-bold text-large">Comprar</p>
                  </Button>
                </div>
              </CardFooter>
            </Card>
            </React.Fragment>  
            )          
          })
        }
      </div>
    </React.Fragment>
  );
};

export default Featured;
