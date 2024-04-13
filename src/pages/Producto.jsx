import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MiniProduct from "../components/MiniProduct";
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
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/react";
import axios from "../api/axios";
import { useCart } from "../hooks/useCart";
import { FaCartPlus, FaCartShopping } from "react-icons/fa6";

const Producto = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const navigate = useNavigate()
  const {cart, addToCart} = useCart()
  const [producto, setProducto] = useState();
  const [relatedProds, setRelatedProds] = useState()
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
        axios
        .get(`/productsid/2/5`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setRelatedProds(response.data);
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
      <div className="flex align-center justify-center max-w-screen-lg min-h-96 mx-auto my-4">
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
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cuotas disponibles</ModalHeader>
              <ModalBody>
                <div className="flex flex row text-center gap-4 mb-4 justify-between items-center">
                  <Image src="../visa_logo.png" width={60} height={30} className="flex items-center"/>
                  <h4 className="flex justify-center items-center max-w-32">Tarjetas Visa</h4>
                  <Select placeholder='Seleccionar cuotas' className='max-w-48' label="Cuotas">
                        <SelectItem textValue={`1 x $ ${Number(producto?.precio).toLocaleString()}`}>1 x $ {Number(producto?.precio).toLocaleString()} </SelectItem>
                        <SelectItem className="text-green-500" textValue={`3 x $ ${(producto?.precio / 3).toLocaleString()}`}>3 x $ {(producto?.precio / 3).toLocaleString()}</SelectItem>
                        <SelectItem className="text-green-500" textValue={`6 x $ ${(producto?.precio / 6).toLocaleString()}`}>6 x $ {(producto?.precio / 6).toLocaleString()}</SelectItem>
                    </Select>
                </div>
                <div className="flex flex row text-center gap-4 mb-4 justify-between items-center">
                <Image src="../logo-Mastercard.png" width={50} height={20} />
                  <h4 className="flex justify-center items-center max-w-32">Tarjetas Mastercard</h4>
                  <Select placeholder='Seleccionar cuotas' className='max-w-48' label="Cuotas">
                        <SelectItem textValue={`1 x $ ${Number(producto?.precio).toLocaleString()}`}>1 x $ {Number(producto?.precio).toLocaleString()} </SelectItem>
                        <SelectItem textValue={`3 x $ ${((producto?.precio*1.10 / 3)).toLocaleString()}`}>3 x $ {(producto?.precio*1.10 / 3).toLocaleString()}</SelectItem>
                        <SelectItem textValue={`6 x $ ${(producto?.precio*1.15 / 6).toLocaleString()}`}>6 x $ {(producto?.precio*1.15 / 6).toLocaleString()}</SelectItem>
                    </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div>
      <Button onPress={onOpen} color="primary" className="" variant="flat">Ver cuotas</Button>
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
              <Table hideHeader className="max-w-64" aria-label="a">
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
      <Card className="max-w-screen-lg flex mx-auto items-center justify-center my-4 p-4">
        <div>
          <h4 className="font-bold text-lg">Podria interesarte</h4>
        </div>
      <div className="flex flex-row justify-center items-center gap-4">
      {
        relatedProds?.map((e, i)=>{
          return(
            <MiniProduct producto={e} key={i} />
          )
        })
      }
      </div>
      </Card>
      <Footer />
    </>
  );
};

export default Producto;
