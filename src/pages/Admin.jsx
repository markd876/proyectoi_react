import { useContext, useState } from "react";
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
} from "@nextui-org/react";


import { FaPencil, FaRegEye, FaTrashCan  } from "react-icons/fa6";
import { UserContext } from "../context/userContext";

export const Admin = () => {
  const {user} = useContext(UserContext)
  const listaBicicletas = [
    {
      brand: "GIANT",
      name: "BICICLETA GIANT PROPEL ADVANCED 1 DISCO",
      price: 6361219,
      photo: "./bicicletas/pp-831_bic095_0.jpg",
    },
    {
      brand: "GIANT",
      name: "BICICLETA GIANT PROPEL ADVANCED 2 DISCO COBALT M 2023",
      price: 5136678,
      photo: "./bicicletas/bic091_bic091_0.jpg",
    },
    {
      brand: "GIANT",
      name: "BICICLETA GIANT TCR ADVANCED 2 DISCO SE",
      price: 4176010,
      photo: "./bicicletas/pp-3411_zrb0310_0.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Table className="flex mx-auto items-center justify-center max-w-screen-lg ">
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn className="text-center">Precio</TableColumn>
          <TableColumn className="text-center">Cantidad</TableColumn>
          <TableColumn className="text-center">Acciones</TableColumn>
        </TableHeader>
        <TableBody>
          {listaBicicletas.map((bicicleta, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{bicicleta.name}</TableCell>
                <TableCell className="text-center"> {bicicleta.price} </TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell>
                  <div className="flex flex-row items-center gap-3.5 justify-center">
                    <span className="cursor-pointer text-lg">
                      <FaPencil />
                    </span>
                    <span className="cursor-pointer text-lg">
                      <FaRegEye />
                    </span>
                    <span className="text-danger cursor-pointer text-lg">
                      <FaTrashCan/>
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Footer />
    </>
  );
};
export default Admin;
