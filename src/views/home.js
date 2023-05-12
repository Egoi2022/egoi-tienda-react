/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import styles from "../styles/navbar.css";
import logo from "../assets/logo.png";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/home/banner";
import Recientes from "../components/home/recientes";
import Promociones from "../components/home/promociones";
import Vendidos from "../components/home/vendidos";
import Populares from "../components/home/populares";
import Bannerdown from "../components/home/bannerdown";
import HeaderResponsive from "../components/headerResponsive";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado del login

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (  

    // <Nav/>
    <>
      
      <Header />
      <HeaderResponsive/>
      <Banner/>
      <Recientes/>
      <Promociones/>
      <Vendidos/>
      <Populares/>
      <Bannerdown/>
      <Footer />
    </>
    // <h1>Home</h1>
    
  );
};

export default Home;
