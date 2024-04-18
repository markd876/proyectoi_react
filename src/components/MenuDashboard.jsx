import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import axios from "../api/axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const MenuDashboard = () => {
    const navigate = useNavigate()

    const handleConfiguracionClick = () =>{
      navigate('/dashboard/configuracion')
    }
    const handleDashboardClick = () =>{
      navigate('/dashboard')
    }
  return (
    <Card className="flex flex-col min-w-40 max-h-40">
    <div onClick={handleDashboardClick} className="cursor-pointer">
      <h3 className="text-center font-bold mt-2">Mis pedidos</h3>
    </div>
    <Divider className="my-2" />
    <div onClick={handleConfiguracionClick} className="cursor-pointer">
      <h3 className="text-center font-bold">Configuracion</h3>
    </div>
    <Divider className="my-2" />
    <a href="dashboard/perfil">
      <h3 className="text-center font-bold">Mi perfil</h3>
    </a>
    <Divider className="my-2" />
    <a href="dashboard/ayuda">
      <h3 className="text-center font-bold mb-4">Ayuda</h3>
    </a>
  </Card>
  )
}

export default MenuDashboard