import React, { useEffect, useState } from 'react'
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
  Checkbox,
  Textarea
} from "@nextui-org/react";
import axios from '../api/axios';
import MenuDashboard from '../components/MenuDashboard';

const ProfileHelp = () => {
  return (
    <React.Fragment>
    <Header/>
    <div className="flex flex-row mx-auto justify-center mt-16 gap-4">
    <MenuDashboard/>
    <Card className="max-w-screen-lg p-6 min-w-[500px]">
        <h4 className='font-bold text-xl mb-4'>Ayuda</h4>
        <p>¿Tienes algun problema?</p>
        <h4>Estamos para ayudarte, si tienes alguna duda</h4>
        <p>puedes visitar nuestra seccion de preguntas frecuentes</p>
        <p>En caso de que no hayas encontrado</p>
        <p>solucion a tu problema, puedes escribirnos:</p>
        <Textarea label="Tu problema" className='mt-4'></Textarea>
        <Button color='success' className='mt-4'>Enviar </Button>
    </Card>
    </div>
    <Footer/>
    </React.Fragment>
  )
}

export default ProfileHelp