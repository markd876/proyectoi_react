import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function header() {

  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const logout = useLogout()

  const signOut = async()=>{
    await logout()
    navigate('/')
  }

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <a href="/"><p className="font-bold text-inherit">Bicicleteria</p></a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/categoria/1">
          Bicicletas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/categoria/2">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/categoria/3">
            Accesorios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Ropa
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="center">
      {user && <NavbarItem><Button as={Link} color="success" href="/dashboard" variant="flat">Dashboard</Button></NavbarItem>}
      {user?.roles === 110 && <NavbarItem><Button as={Link} color="secondary" href="/admin" variant="flat">Admin</Button></NavbarItem>}
      {!user && <NavbarItem><Link href="/login">Ingresar</Link></NavbarItem>}
      {!user && <NavbarItem><Button as={Link} color="primary" href="/register" variant="flat">Registrarse</Button></NavbarItem>}
        <NavbarItem>
          <a href="/carrito"><FaCartShopping/></a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        {user && <Button as={Link} color="danger" href="" variant="flat" onClick={signOut}>Log out</Button>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default header
