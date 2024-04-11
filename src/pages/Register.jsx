import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';
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
import axios from '../api/axios';

const Register = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [provincia, setProvincia] = useState()
  const [calle, setCalle] = useState()
  const [numCasa, setNumCasa] = useState()
  const [codP, setCodP] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleRegister = () =>{
    const newUser = {
      nombre,
      apellido,
      provincia,
      calle,
      numCasa,
      codP,
      email,
      password
    }
    axios.post(`/register/`,{
      newUser,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      navigate('/login')
      console.log(response.data)
    })
  }
  return (
    <>
    <Header/>
    <Card className='max-w-screen-md flex mx-auto items-center justify-center mt-4'>
        <h4 className='font-bold text-xl my-8'>Registro</h4>
        <div className='flex flex-col gap-4 min-w-80 mb-4'>
            <div className='flex flex-row gap-2'>
                <Input label='Nombre' onValueChange={setNombre} isRequired></Input>
                <Input label='Apellido' onValueChange={setApellido} isRequired></Input>
            </div>
            <Select label='Provincia' onSelectionChange={(keys) => setProvincia(keys.anchorKey)} isRequired>
                <SelectItem key={'Buenos Aires'}>Buenos Aires</SelectItem>
                <SelectItem key={'CABA'}>CABA</SelectItem>
                <SelectItem key={'Catamarca'}>Catamarca</SelectItem>
                <SelectItem key={'Chaco'}>Chaco</SelectItem>
                <SelectItem key={'Chubut'}>Chubut</SelectItem>
                <SelectItem key={'Córdoba'}>Córdoba</SelectItem>
                <SelectItem key={'Corrientes'}>Corrientes</SelectItem>
                <SelectItem key={'Entre Ríos'}>Entre Ríos</SelectItem>
                <SelectItem key={'Formosa'}>Formosa</SelectItem>
                <SelectItem key={'Jujuy'}>Jujuy</SelectItem>
                <SelectItem key={'La Pampa'}>La Pampa</SelectItem>
                <SelectItem key={'La Rioja'}>La Rioja</SelectItem>
                <SelectItem key={'Mendoza'}>Mendoza</SelectItem>
                <SelectItem key={'Misiones'}>Misiones</SelectItem>
                <SelectItem key={'Neuquén'}>Neuquén</SelectItem>
                <SelectItem key={'Río Negro'}>Río Negro</SelectItem>
                <SelectItem key={'Salta'}>Salta</SelectItem>
                <SelectItem key={'San Juan'}>San Juan</SelectItem>
                <SelectItem key={'San Luis'}>San Luis</SelectItem>
                <SelectItem key={'Santa Cruz'}>Santa Cruz</SelectItem>
                <SelectItem key={'Santa Fe'}>Santa Fe</SelectItem>
                <SelectItem key={'Santiago del Estero'}>Santiago del Estero</SelectItem>
                <SelectItem key={'Tierra del Fuego'}>Tierra del Fuego</SelectItem>
                <SelectItem key={'Tucumán'}>Tucumán</SelectItem>
            </Select>
            <Input label='Calle' onValueChange={setCalle} isRequired></Input>
            <div className='flex flex-row gap-2'>
                <Input type='Number' label='Numero de casa' onValueChange={setNumCasa} isRequired></Input>
                <Input label='Codigo Postal' onValueChange={setCodP} isRequired></Input>
            </div>
            <Input type='email' label='Email' className='' onValueChange={setEmail} isRequired ></Input>
            <Input type='password' label='Contraseña' className='' onValueChange={setPassword} isRequired></Input>
            <Input type='password' label='Repetir contraseña' className='' isRequired></Input>
            <Button color='primary' className='mt-4' onClick={handleRegister} isRequired>Registrarse</Button>
        </div>
    </Card>
    <Footer/>
    </>
  )
}

export default Register