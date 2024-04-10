import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

function footer() {
  return (
    <footer>
      <Divider className="my-8" />
      <div className="flex flex-row justify-center gap-48 mb-8">
        <div className="footerLogo">
          <p>Bicicleteria</p>
        </div>
        <div className="flex ">
          <div className="flex flex-row gap-4 max-h-8">
            <div>Politica de privacidad</div>
            <Divider orientation="vertical" />
            <div>Envios</div>
            <Divider orientation="vertical" />
            <div>Politica de devoluciones</div>
          </div>
        </div>
        <div className="flex flex-row text-lg gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
    </footer>
  );
}
export default footer;
