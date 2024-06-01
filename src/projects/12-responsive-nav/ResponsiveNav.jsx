import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";
import { Main, Menus, NavBar } from "./NavStyles";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

export default function ResponsiveNav() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  });

  const [page, setPage] = useState(<Home pagetitle={"home"} />);

  const navigate = (e) => {
    let nevItem = e.target.innerText;

    switch (nevItem) {
      case "Home":
        setPage(<Home pagetitle={nevItem} />);
        break;
      case "About":
        setPage(<About pagetitle={nevItem} />);
        break;
      case "Contact Us":
        setPage(<ContactUs pagetitle={nevItem} />);
      default:
        break;
    }
  };
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
          <Menus
            pos={showElement.navOpened ? "column" : "row"}
            onClick={navigate}
          >
            <NavItem text={"Home"} onClick={navigate} />
            <NavItem text={"About"} onClick={navigate} />
            <NavItem text={"Contact Us"} onClick={navigate} />
          </Menus>
        ) : null}
      </NavBar>

      {page}
    </Main>
  );
}
