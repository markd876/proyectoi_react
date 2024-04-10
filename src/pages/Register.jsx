import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, useParams } from 'react-router-dom';
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
  Input,
  Checkbox
} from "@nextui-org/react";

const Register = () => {
  return (
    <>
    <Header/>
    <Card className='max-w-screen-md flex mx-auto items-center justify-center mt-4'>
        <h4 className='font-bold text-xl my-8'>Registro</h4>
        <div className='flex flex-col gap-4 min-w-80 mb-4'>
            <div className='flex flex-row gap-2'>
                <Input label='Nombre'></Input>
                <Input label='Apellido'></Input>
            </div>
            <Select label='Provincia'>
                <SelectItem>Buenos Aires</SelectItem>
                <SelectItem>CABA</SelectItem>
                <SelectItem>Catamarca</SelectItem>
                <SelectItem>Chaco</SelectItem>
                <SelectItem>Chubut</SelectItem>
                <SelectItem>Córdoba</SelectItem>
                <SelectItem>Corrientes</SelectItem>
                <SelectItem>Entre Ríos</SelectItem>
                <SelectItem>Formosa</SelectItem>
                <SelectItem>Jujuy</SelectItem>
                <SelectItem>La Pampa</SelectItem>
                <SelectItem>La Rioja</SelectItem>
                <SelectItem>Mendoza</SelectItem>
                <SelectItem>Misiones</SelectItem>
                <SelectItem>Neuquén</SelectItem>
                <SelectItem>Río Negro</SelectItem>
                <SelectItem>Salta</SelectItem>
                <SelectItem>San Juan</SelectItem>
                <SelectItem>San Luis</SelectItem>
                <SelectItem>Santa Cruz</SelectItem>
                <SelectItem>Santa Fe</SelectItem>
                <SelectItem>Santiago del Estero</SelectItem>
                <SelectItem>Tierra del Fuego</SelectItem>
                <SelectItem>Tucumán</SelectItem>
            </Select>
            <Input label='Calle'></Input>
            <div className='flex flex-row gap-2'>
                <Input type='Number' label='Numero de casa'></Input>
                <Input label='Codigo Postal'></Input>
            </div>
            <Input type='email' label='Email' className=''></Input>
            <Input type='password' label='Contraseña' className=''></Input>
            <Input type='password' label='Repetir contraseña' className=''></Input>
            <Button color='primary' className='mt-4'>Registrarse</Button>
        </div>
    </Card>
    <Footer/>
    </>
  )
}

export default Register