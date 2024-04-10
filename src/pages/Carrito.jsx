import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button
} from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";
import { useCart } from "../hooks/useCart";

const Carrito = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const [codP, setCodP] = useState()
  const [envio, setEnvio] = useState()


  const calcularEnvio = () =>{
    let totalEnvio = 0
    let sde = 4200
    let result = sde - codP
    console.log(Math.abs(result))
    if(Math.abs(result) < 1000){
      totalEnvio = 5000
      setEnvio(totalEnvio)
    } else if(Math.abs(result) < 2000){
      totalEnvio = 15000
      setEnvio(totalEnvio)
    } else{
      totalEnvio = 25000
      setEnvio(totalEnvio)
    }
    let envio = {
      codP,
      totalEnvio
    }
    localStorage.setItem('envio', JSON.stringify(envio))
  }

  const calcularTotal = () =>{
    let total = 0
    cart.map((e)=>{
      total += e.precio * e.cantidad
    })
    return total
  }

  return (
    <>
      <Header></Header>
      <div className="flex flex-row justify-center align-center mx-auto gap-1.5 mt-5">
        <Card className="flex align-center justify-center max-w-screen-sm min-h-96 min-w-fit">
          <CardBody>
            <h4>Carrito</h4>
            <Table
              hideHeader
              removeWrapper
              aria-label="Example static collection table"
            >
              <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Precio</TableColumn>
                <TableColumn>Cantidad</TableColumn>
                <TableColumn>Action</TableColumn>
              </TableHeader>
              <TableBody>
                {cart.map((bicicleta, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>{bicicleta.nombre}</TableCell>
                      <TableCell className="text-nowrap">
                        $ {Number(bicicleta?.precio).toLocaleString()}{" "}
                      </TableCell>
                      <TableCell>
                        <Input
                          className="text-center"
                          type="number"
                          label="cantidad"
                          defaultValue={bicicleta.cantidad}
                          onChange={(e) => updateQuantity(bicicleta.id, parseInt(e.target.value))}
                        />
                      </TableCell>
                      <TableCell>
                      <RxCross1 onClick={() => removeFromCart(bicicleta)} className="cursor-pointer"/>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
        <div className="flex flex-col gap-4">
          <Card className="flex align-center justify-center max-w-xs max-h-40 min-h-40">
            <h4 className="font-bold text-center text-wrap">
              ¿Tienes cupón de descuento?
            </h4>
            <h4 className="font-bold text-center text-wrap">Ingresalo aqui</h4>
            <div className="flex flex-row gap-2.5 mt-4 mx-5">
              <Input></Input>
              <Button color="primary">Ingresar</Button>
            </div>
          </Card>
          <Card className="flex align-center justify-center max-w-xs max-h-40 min-h-40">
            <h4 className="font-bold text-center text-wrap">
              Calcular envio
            </h4>
            <h4 className="font-bold text-center text-wrap mt-4">Ingresa tu codigo postal</h4>
            <div className="flex flex-row gap-2.5 mt-4 mx-5">
              <Input onChange={(e) => setCodP(e.target.value)}></Input>
              <Button color="primary" onClick={() => calcularEnvio()}>Calcular</Button>
            </div>
          </Card>
          <Card className="flex align-center max-w-xs min-h-52">
            <h4 className="text-center font-bold mt-5 ">Total</h4>
            <div className="flex flex-row justify-between text-nowrap max-w-xs">
              <h4 className="font-bold mx-2">Subtotal</h4>
              <Divider className="mt-4 max-w-32 " />
              <h4 className="font-bold mx-2 text-center">$ {calcularTotal().toLocaleString()}</h4>
            </div>
            <div className="flex flex-row justify-between text-nowrap max-w-full">
              <h4 className="font-bold mx-2">Envío</h4>
              <Divider className="mt-4 max-w-44 px-8" />
              <h4 className="font-bold mx-2">$ {envio ? envio?.toLocaleString() : 0}</h4>
            </div>
            <div className="flex flex-row justify-between text-nowrap max-w-full">
              <h4 className="font-bold mx-2">Descuentos</h4>
              <Divider className="mt-4 max-w-36 px-8" />
              <h4 className="font-bold mx-2 text-center">$ 0</h4>
            </div>
            <div className="flex flex-row gap-2.5 mt-6 mx-5 align-center justify-center">
              <a href="/"><Button color="primary">Seguir comprando</Button></a>
              <Button color="success"><a href="/checkout">Pagar</a></Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Carrito;
