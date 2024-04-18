import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuDashboard from "../components/MenuDashboard";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Checkbox,
  Select,
  SelectItem
} from "@nextui-org/react";

const Configuracion = () => {
    
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-row mx-auto justify-center mt-16 gap-4">
        <MenuDashboard/>
        <Card className="max-w-screen-lg p-6 min-w-[500px]">
            <div className="text-center font-bold text-lg mb-4 min-w-80">Configuracion</div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-60">
                        <h4>Opcion</h4>
                        <Checkbox></Checkbox>
                    </div>
                    <div className="flex flex-row gap-48">
                        <h4 className="text-center">Modo</h4>
                        <Select className="min-w-32">
                            <SelectItem>Oscuro</SelectItem>
                            <SelectItem>Claro</SelectItem>
                        </Select>
                    </div>
                    <div className="flex flex-row gap-40">
                        <h4>Moneda</h4>
                        <Select className="min-w-32">
                            <SelectItem>ARS</SelectItem>
                            <SelectItem>USD</SelectItem>
                        </Select>
                    </div>
                </div>
        </Card>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Configuracion;
