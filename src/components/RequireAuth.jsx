import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext, useUserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import React from 'react'

const requireAuth = () => {
  const { user } = useUserContext();
  const location = useLocation();
  const [userLoaded, setUserLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ha sido cargado
    if (!userLoaded) {
      // El usuario aún no ha sido cargado, no hacemos nada
      return;
    }

    // Verificar si el usuario no está autenticado
    if (!user) {
      // Redirigir al usuario al componente de inicio de sesión
      navigate('/login');
    }
  }, [user, userLoaded, navigate]);

  useEffect(() => {
    // Verificar si el usuario ha sido cargado
    if (user !== null) {
      // El usuario ha sido cargado, establecemos userLoaded en true
      setUserLoaded(true);
    }
  }, [user]);

  // Renderizar el contenido protegido
  return <Outlet />;
}

export default requireAuth