import React ,{ useContext, useState, useEffect, useRef } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Input,
  Textarea,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,useDisclosure, Select, SelectItem
} from "@nextui-org/react";
import DataTable from 'react-data-table-component';
import { FaPencil, FaRegEye, FaTrashCan  } from "react-icons/fa6";
import { UserContext } from "../context/userContext";
import axios from "../api/axios";

export const Admin = () => {
  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);
  const [id, setId] = useState()
  const [categoria, setCategoria] = useState(0)
  const [nombre,setNombre] = useState()
  const [precio, setPrecio] = useState()
  const [desc, setDesc] = useState()
  const [nuevo, setNuevo] = useState()
  const [marca, setMarca] = useState()
  const [color, setColor] = useState()
  const [data, setData] = useState()
  const [records, setRecords] = useState(data)
  const [product, setProduct] = useState()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {user} = useContext(UserContext)
  
  const handleInputChange = (e) =>{
    console.log('hola')
    const filteredData = data.filter(record =>{
      return record.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRecords(filteredData)
  }

  const handleModal1OpenChange = (isOpen) => {
    console.log('hola')
    setModal1Open(isOpen);
  };

  const handleModal2OpenChange = (isOpen) => {
    setModal2Open(isOpen);
  };

  const handleModal3OpenChange = (isOpen) => {
    setModal3Open(isOpen);
  };

  const closeSpecificModal = (modalNumber) => {
    if (modalNumber === 1) {
      setModal1Open(false);
    } else if (modalNumber === 2) {
      setModal2Open(false);
    } else if(modalNumber === 3) {
      setModal3Open(false)
    }
    
  };

  const handleDelete = (e,id) =>{
    console.log(id)
    axios.get(`/producto/${id}`,{
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      console.log(response.data)
      setNombre(response.data.nombre)
      setId(response.data.id)
    })
  }
  const handleConfirmDelete = (product) =>{
    axios.post(`/deleteproducto/${id}`,{
      product,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      console.log(response.data)
      try {
        let id = 1
        axios.get(`/products`,{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        ).then((response)=>{
          console.log(response.data)
          setData(response.data)
          setRecords(response.data)
        })
      } catch (error) {
        console.error(error)
      }
    })
  }

  const handleEdit = (e, id) =>{
    console.log(id)
    axios.get(`/producto/${id}`,{
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      setNombre(response.data.nombre)
      setPrecio(response.data.precio)
      setDesc(response.data.descripcion)
      setNuevo(response.data.nuevo)
      setMarca(response.data.marca)
      setColor(response.data.color)
      setId(response.data.id)
      setProduct(response.data)
    })
  }
  const handleConfirmEdit = (product) =>{
    console.log(product)
    console.log(product.id)
    let productSent = {
      id,
      nombre,
      precio,
      desc,
      marca,
      color,
      nuevo
    }
    console.log(productSent)
    setProduct(productSent)
    axios.post(`/editproducto/${product.id}`,{
      productSent,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      console.log(response.data)
      setProduct(response.data)
      try {
        let id = 1
        axios.get(`/products`,{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        ).then((response)=>{
          console.log(response.data)
          setData(response.data)
          setRecords(response.data)
        })
      } catch (error) {
        console.error(error)
      }
    })
  }

  const handleAdd = () =>{
    const product = {
      nombre,
      desc,
      precio,
      marca,
      color,
      nuevo,
      categoria
    }
    console.log(product)
    axios.post(`/crearproducto/`,{
      product,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then((response) =>{
      console.log(response.data)
      setProduct(response.data)
      try {
        let id = 1
        axios.get(`/products`,{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        ).then((response)=>{
          console.log(response.data)
          setData(response.data)
          setRecords(response.data)
        })
      } catch (error) {
        console.error(error)
      }
    })
  }

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Marca',
      selector: row => row.marca,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Precio',
      selector: row => (Number(row.precio)).toLocaleString(),
      sortable: true,
    },
    {
      name: 'Categoria',
      selector: row => row.categoriaproductos?.descripcion,
      sortable: true,
    },
    {
      name: 'Color',
      selector: row => row.color,
      sortable: true,
    },
    {
      name: 'Nuevo',
      selector: row => row.nuevo,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <React.Fragment>
          <div className="flex flex-row gap-4">
          <FaPencil className="cursor-pointer text-lg" onClickCapture={handleModal1OpenChange} onClick={(e)=>handleEdit(e, row.id)}></FaPencil>
          <FaTrashCan color="red" className="cursor-pointer text-lg" onClickCapture={handleModal2OpenChange} onClick={(e)=>handleDelete(e, row.id)}></FaTrashCan>
          </div>
          </React.Fragment>
      ),
  }
  ];
  useEffect(()=>{
    console.log('update data/record')
  },[data,records])
  useEffect(()=>{
    try {
      let id = 1
      axios.get(`/products`,{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      ).then((response)=>{
        console.log(response.data)
        setData(response.data)
        setRecords(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  },[])
  return (
    <>
      <Header />
      <div className="max-w-5xl flex justify-center m-auto">
      <Modal isOpen={isModal1Open} onOpenChange={handleModal1OpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar producto</ModalHeader>
              <ModalBody>
                <Input value={nombre} onValueChange={setNombre} label="Nombre del producto"></Input>
                <Textarea
                  label="Descripcion del producto"
                  value={desc}
                  onChange={setDesc}
                />
                <Input value={precio} onValueChange={setPrecio} type="number" label="Precio del producto"></Input>
                <Input value={marca} onValueChange={setMarca} label="Marca del producto"></Input>
                <Input value={color} onValueChange={setColor} label="Color del producto"></Input>
                <Input value={nuevo} onValueChange={setNuevo} type="number" label="Novedad" description="Valor 1 para producto novedad, 0 para producto común"></Input>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => closeSpecificModal(1)}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={() => closeSpecificModal(1)} onClick={() => handleConfirmEdit(product)}> 
                  Editar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isModal2Open} onOpenChange={handleModal2OpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Borrar producto</ModalHeader>
              <ModalBody>
                <h4>¿Estas seguro de borrar el producto?</h4>
                <h4>{nombre}</h4>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={() => closeSpecificModal(2)}>
                  Cerrar
                </Button>
                <Button color="danger" onPress={() => closeSpecificModal(2)} onClick={() => handleConfirmDelete(product)}> 
                  Borrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isModal3Open} onOpenChange={handleModal3OpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Añadir producto</ModalHeader>
              <ModalBody>
              <Input onValueChange={setNombre} label="Nombre del producto"></Input>
                <Textarea
                  label="Descripcion del producto"
                  onValueChange={setDesc}
                />
                <Input onValueChange={setPrecio} type="number" label="Precio del producto"></Input>
                <Input onValueChange={setMarca} label="Marca del producto"></Input>
                <Input onValueChange={setColor} label="Color del producto"></Input>
                <Select label="Categoria" onSelectionChange={(keys) => setCategoria(keys.anchorKey)}>
                  <SelectItem key={1}>Bicicletas</SelectItem>
                  <SelectItem key={2}>Productos</SelectItem>
                </Select>
                <Input onValueChange={setNuevo} type="number" label="Novedad" description="Valor 1 para producto novedad, 0 para producto común"></Input>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={() => closeSpecificModal(3)}>
                  Cerrar
                </Button>
                <Button color="success" onPress={() => closeSpecificModal(3)} onClick={() => handleAdd()}> 
                  Añadir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
        <Input className="max-w-96" onChange={handleInputChange} label="Buscar producto"></Input>
        <Button color="success" onClick={handleModal3OpenChange}>Añadir producto</Button>
        </div>
      <DataTable
        columns={columns}
        data={records}
      />
      </div>
      </div>
      <Footer />
    </>
  );
};
export default Admin;
