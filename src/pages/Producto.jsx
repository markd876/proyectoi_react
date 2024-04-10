import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import {
  Image,
  Button,
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import axios from "../api/axios";
import { useCart } from "../hooks/useCart";

const Producto = () => {
  const navigate = useNavigate()
  const {cart, addToCart} = useCart()
  const [producto, setProducto] = useState();
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    try {
      axios
        .get(`/producto/${id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setProducto(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const buyNow = (producto) =>{
    addToCart(producto)
    navigate('/carrito')
  }

  return (
    <>
      <Header />
      <div className="flex align-center justify-center max-w-screen-lg min-h-96 mx-auto">
        <div className="min-w-max">
          <Image src={producto?.imagen} width={500} height={500} />
        </div>
        <div className="flex flex-col justify-center align-center gap-5">
          <div className="flex justify-center align-center flex-col">
            <h4 className="font-bold text-lg">{producto?.nombre}</h4>
            <small>{producto?.marca}</small>
          </div>
          <div className="flex flex-row gap-5">
            <h3 className="font-bold">
              $ {Number(producto?.precio).toLocaleString()}{" "}
            </h3>
            <div className="flex flex-row gap-1 justify-center align-center">
              <Image
                src="../2560px-Google_Pay_Logo.svg.png"
                width={50}
                height={30}
              />
              <Image src="../apple_pay.png" width={60} height={30} />
              <Image src="../visa_logo.png" width={60} height={30} />
              <Image src="../logo-Mastercard.png" width={50} height={20} />
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-2">
              {producto?.categoriaId === 1 && (
                <Select
                  label="Talles"
                  placeholder="Selecciona un talle"
                  className="max-w-xs"
                >
                  <SelectItem key={1}>S</SelectItem>
                  <SelectItem key={2}>M</SelectItem>
                  <SelectItem key={3}>L</SelectItem>
                  <SelectItem key={4}>XL</SelectItem>
                </Select>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Button color="primary" onClick={() => addToCart(producto)}>Agregar al carrito</Button>
            <Button color="success" onClick={() => buyNow(producto)}>Comprar</Button>
          </div>
        </div>
      </div>
      <Card className="max-w-screen-lg flex mx-auto items-center justify-center">
        <CardHeader>
          <div className="">
            <h4 className="font-bold text-lg">Descripcion</h4>
            <p className="text-">{producto?.descripcion}</p>
            {producto?.categoriaId === 1 && <h4 className="font-bold my-4">Tabla de talles</h4>}
            {producto?.categoriaId === 1 && (
              <React.Fragment>
              <Table hideHeader className="max-w-64">
                <TableHeader>
                  <TableColumn>talle</TableColumn>
                  <TableColumn>medida</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>XS</TableCell>
                    <TableCell>157-169cm</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>S</TableCell>
                    <TableCell>165-175cm</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>M</TableCell>
                    <TableCell>171cm-181cm</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>ML</TableCell>
                    <TableCell>177-187cm</TableCell>
                  </TableRow>
                  <TableRow key="5">
                    <TableCell>L</TableCell>
                    <TableCell>183cm-193cm</TableCell>
                  </TableRow>
                  <TableRow key="6">
                    <TableCell>XL</TableCell>
                    <TableCell>189-199cm</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              </React.Fragment>
            )}
          </div>
        </CardHeader>
      </Card>
      <Footer />
    </>
  );
};

export default Producto;
