import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
    Button,
    Select,
    SelectItem
  } from "@nextui-org/react";
import { useCart } from '../hooks/useCart';


const Checkout = () => {
    const [method, setMethod] = useState()
    const {cart} = useCart()
    const calcularTotal = () =>{
        let total = 0
        cart.map((e)=>{
          total += e.price * e.cantidad
        })
        let envio = localStorage.getItem('envio')
        let envioP = JSON.parse(envio)
        total += envioP.totalEnvio
        return total
      }

    
    const handleClick = (e) =>{
        console.log(e.target.value)
        setMethod(e.target.value)
    }
  return (
    <React.Fragment>
        <Header/>
        <Card className='max-w-screen-md flex mx-auto items-center justify-center mt-4'>
            <div className='min-w-72 flex flex-col my-4'>
                <h4 className='font-bold mb-8'>Total a pagar: $ {calcularTotal().toLocaleString()} </h4>
                <h4>Forma de pago</h4>
                <Select label="Forma de pago" onChange={handleClick}>
                    <SelectItem key={'tarjetac'} value={'tarjetac'}>Tarjeta de credito</SelectItem>
                    <SelectItem key={'tarjetad'} value={'tarjetad'}>Tarjeta de debito</SelectItem>
                    <SelectItem key={'mercado'} value={'mercado'}>MercadoPago</SelectItem>
                    <SelectItem key={'transferencia'} value={'transferencia'}>Transferencia</SelectItem>
                    <SelectItem key={'efectivo'} value={'efectivo'}>Efectivo</SelectItem>
                </Select>
            </div>
            {method === "mercado" && 
            <div className=' flex flex-col justify-center align-center text-center'>
                <div className='flex justify-center'>
                <img src="./logo-mercado-pago-1024.png" alt="" height={150} width={150} className=''/>
                </div>
                <h4 className='font-bold text-lg mb-4'>Aceptamos MercadoPago</h4>
                <h4>Serás redigido a la pagina de mercadopago y al terminar</h4>
                <h4>regresaras al sitio con la compra confirmada</h4>
                <Button color='success' className='my-4'>Continuar</Button>
            </div>
            
            }
            {method === "tarjetac" && 
            <div className='mt-4'>
                <div className='flex flex-col mb-4'>
                    <h4>Nombre del titular</h4>
                    <Input className='min-w-80' placeholder='Nombre'></Input>
                </div>
                <div className='flex flex-col'>
                    <h4>Numero de la tarjeta</h4>
                    <Input className='min-w-80' placeholder='XXXX XXXX XXXX XXXX'></Input>
                </div>
                <div className='flex flex-row mt-4'>
                    <h4 className='max-w-28 text-wrap'>Fecha de vencimiento</h4>
                    <Input placeholder='MM' className='max-w-16' max={12}></Input>
                    <Input placeholder='AA' className='max-w-16'></Input>
                </div>
                <div className='flex flex-row my-4 '>
                    <h4 className='max-w-28'>Codigo de seguridad</h4>
                    <Input placeholder='123' className='max-w-16' max={12}></Input>
                </div>
                <div className='flex flex-row my-4 justify-between align-center text-center'>
                    <h4 className='max-w-28'>Cuotas</h4>
                    <Select placeholder='Seleccionar cuotas' className='max-w-90' label="cuotas">
                        <SelectItem textValue={`1 x $ ${calcularTotal().toLocaleString()}`}>1 x $ {calcularTotal().toLocaleString()} </SelectItem>
                        <SelectItem textValue={`3 x $ ${(calcularTotal() / 3).toLocaleString()}`}>3 x $ {(calcularTotal() / 3).toLocaleString()}</SelectItem>
                        <SelectItem textValue={`6 x $ ${(calcularTotal() / 6).toLocaleString()}`}>6 x $ {(calcularTotal() / 6).toLocaleString()}</SelectItem>
                    </Select>
                </div>
                <div className='flex justify-center mb-4'>
                    <Button color='success'>Confirmar pago</Button>
                </div>
            </div>
            }
            {method === "tarjetad" && 
            <div className='mt-4'>
                <div className='flex flex-col mb-4'>
                    <h4>Nombre del titular</h4>
                    <Input className='min-w-80' placeholder='Nombre'></Input>
                </div>
                <div className='flex flex-col'>
                    <h4>Numero de la tarjeta</h4>
                    <Input className='min-w-80' placeholder='XXXX XXXX XXXX XXXX'></Input>
                </div>
                <div className='flex flex-row mt-4'>
                    <h4 className='max-w-28 text-wrap'>Fecha de vencimiento</h4>
                    <Input placeholder='MM' className='max-w-16' max={12}></Input>
                    <Input placeholder='AA' className='max-w-16'></Input>
                </div>
                <div className='flex flex-row my-4'>
                    <h4 className='max-w-28'>Codigo de seguridad</h4>
                    <Input placeholder='123' className='max-w-16' max={12}></Input>
                </div>
                <div className='flex justify-center mb-4'>
                    <Button color='success'>Confirmar pago</Button>
                </div>
            </div>
            }
            {method === "transferencia" && 
            <div className='flex flex-col justify-center align-center text-center'>
                <div className='flex justify-center'>
                <img src="./Brubank_logo.png" alt="" height={150} width={150} className=''/>
                </div>
                <h4 className='font-bold text-lg'>Datos para la transferencia</h4>
                <h4>Cuenta a nombre de Marcos Darchuk</h4>
                <h5>CBU: 1430001713000133230011</h5>
                <h5>Alias: marcos.darchuk</h5>
                <h5>CUIT 20-43289069-5</h5>
                <h5>Numero de cuenta: 1300013323001</h5>
                <h4 className='font-bold mt-4'>Luego de transferir el importe, enviar el comprobante a continuacion</h4>
                <div className='flex justify-center mt-4'>
                <input type="file" name="" id="" />
                </div>
                <Button color='success' className='my-4'>Confirmar pago</Button>
            </div>
            
            }
            {method === "efectivo" && 
            <div className='mt-4 flex flex-col justify-center align-center text-center'>
                <div className='flex justify-center'>
                <img src="./pago-facil-2019-logo-8BE6DD28D6.png" alt="" height={150} width={150} className=''/>
                </div>
                <h4 className='font-bold text-lg'>Aceptamos Pagofácil</h4>
                <h4>Una vez generado el cupón serás redigirido y tu pedido quedará pendiente,</h4>
                <h4>el mismo tiene una validez de 72hs</h4>
                <Button color='success' className='my-4'>Generar cupón</Button>
            </div>
            
            }
        </Card>
        <Footer/>
    </React.Fragment>
  )
}

export default Checkout