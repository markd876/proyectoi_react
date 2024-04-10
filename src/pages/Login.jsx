import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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
import { UserContext } from '../context/userContext';

const LOGIN_URL = '/login'

const Login = () => {
    const {user, setUser} = useContext(UserContext) 
    const navigate = useNavigate()
    const userRef = useRef()

    const [email, setEmail] = useState()
    const [pwd, setPwd] = useState()

    useEffect(()=>{
        console.log('update')
    },[user,pwd])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(email, pwd)
        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({email,pwd}),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            console.log(response.data)
            setUser(response.data)
            console.log(user)
            navigate('/')
        }catch(err){
            console.error(err)
        }
    }

  return (
    <>
    <Header/>
    <Card className='max-w-screen-md flex mx-auto items-center justify-center mt-4'>
        <h4 className='font-bold text-xl my-8'>Login</h4>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 min-w-80 mb-4'>
            <Input type='email' label='Email' className='' ref={userRef} onChange={((e) => setEmail(e.target.value))}></Input>
            <Input type='password' label='Contraseña' className='' ref={userRef} onChange={((e) => setPwd(e.target.value))}></Input>
            <div className='flex flex-row gap-4'>
            <Checkbox>Recordarme</Checkbox>
            <a href="/forgot"><p className='font-bold text-blue-600'>¿Olvidaste tu contraseña?</p></a>
            </div>
            <Button color='primary' type='submit'>Ingresar</Button>
        </div>
        </form>
    </Card>
    <Footer/>
    </>
  )
}

export default Login