import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
import axios from "../api/axios";

const Dashboard = () => {
  const [orders, setOrders] = useState({});
  const [pedidos, setPedidos] = useState({});

  useEffect(() => {
    try {
      const response = axios.get("/orders", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setOrders(response.data);
        });
    } catch (error) {}
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-row mx-auto justify-center mt-16 gap-4">
        <Card className="flex flex-col min-w-40 max-h-40">
          <a href="/dashboard">
            <h3 className="text-center font-bold mt-2">Mis pedidos</h3>
          </a>
          <Divider className="my-2" />
          <a href="dashboard/configuracion">
            <h3 className="text-center font-bold">Configuracion</h3>
          </a>
          <Divider className="my-2" />
          <a href="dashboard/perfil">
            <h3 className="text-center font-bold">Mi perfil</h3>
          </a>
          <Divider className="my-2" />
          <a href="dashboard/ayuda">
            <h3 className="text-center font-bold mb-4">Ayuda</h3>
          </a>
        </Card>
        <Card className="max-w-screen-lg p-6">
          <div className="text-center font-bold text-lg mb-4">Mis pedidos</div>
          <div className="">
            { orders.length > 0 && orders.map((e, i) => {
                return(
              <Card className="min-w-96 mb-4" key={i}>
                <div className="p-4 flex flex-row justify-between">
                  <h2 className="font-bold">Pedido #{e?.id}</h2>
                  <h2 className="font-bold text-lg">$ {e?.total} </h2>
                </div>
                <div className="p-4 max-w-xs">
                  <h3>Producto(s):</h3>
                  <div className="flex flex-col gap-2">
                    {e?.pedidosorden?.map((e, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className="flex flex-row">
                            <h4>
                              {e.productopedidos
                                ? e.productopedidos.nombre
                                : "Producto no disponible"}
                            </h4>{" "}
                            <h4 className="flex flex-col text-center text-nowrap">
                              x {e.cantidad}{" "}
                            </h4>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-row gap-4 p-4 justify-between">
                  <div className="flex flex-row gap-0.5 justify-center">
                    <div className="flex items-center">
                      <h3>Estado del pedido: </h3>
                    </div>
                    <div className="flex items-center">
                      {e.estado == 1 && (
                        <h3 className="font-bold"> Pendiente confirmacion</h3>
                      )}
                      {e.estado == 2 && (
                        <h3 className="font-bold"> En preparacion</h3>
                      )}
                      {e.estado == 3 && (
                        <h3 className="font-bold"> Pedido enviado</h3>
                      )}
                      {e.estado == 4 && (
                        <h3 className="font-bold"> Producto recibido</h3>
                      )}
                    </div>
                  </div>
                  <Button color="success">
                    Detalles
                  </Button>
                </div>
              </Card>
                );
            })}
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
