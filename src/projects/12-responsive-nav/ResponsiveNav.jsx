import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";
import Text from "../components/Text.js";
import { Main, Menus, NavBar } from "./NavStyles";

export default function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });
  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;
      windowWidth < 600 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true });
      windowWidth > 600 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false });
    };
  }, []);

  return (
    <Main className="wrapper">
      <NavBar pos={showElement.navOpened ? ["column", "start"] : "row"}>
        <a className="h4" href="#">
          John
        </a>
        {showElement.hamburgerIcon && (
          <AiOutlineMenu
            onClick={() => {
              setShowElement({
                hamburgerIcon: false,
                navOpened: true,
                navbarNav: true,
                closeIcon: true,
              });
            }}
          />
        )}
        {showElement.closeIcon && (
          <AiOutlineClose
            style={{ display: "absolute" }}
            onClick={() => {
              setShowElement({
                hamburgerIcon: true,
                navOpened: false,
                navbarNav: false,
                closeIcon: false,
              });
            }}
          />
        )}
        {showElement.navbarNav ? (
          <Menus pos={showElement.navOpened ? "column" : "row"}>
            <NavItem text={"Home"} />
            <NavItem text={"About"} />
            <NavItem text={"Contact Us"} />
          </Menus>
        ) : null}
      </NavBar>

      <Text style={{ padding: "0 1rem" }} />
    </Main>
  );
}
