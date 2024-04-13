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


const MiniProduct = ({producto}) => {
  return (
    <Card className="max-w-48 p-4 my-4">
        {console.log(producto)}
    <div className="flex justify-center">
    <img src={producto?.imagen} alt="" height={150} width={170}/>
    </div>
    <div className="flex flex-col">
    <h4 className="font-bold text-center">{producto?.nombre}</h4>
    <div className="flex flex-col gap-1.5 justify-center flex-grow align-center text-center">
            <h4 className="font-bold text-large">$ {Number(producto?.precio).toLocaleString()}</h4>
            <Button color="primary" startContent={<FaCartPlus />} onClick={() => addToCart(producto)}>
              <p className="font-bold text-large">Añadir al carrito</p>
            </Button>
            <Button color="success" startContent={<FaCartShopping />} onClick={() => buyNow(producto)}>
              <p className="font-bold text-large">Comprar</p>
            </Button>
          </div>
    </div>

  </Card>
  )
}

export default MiniProduct