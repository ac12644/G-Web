import React from "react";
import styled from "styled-components";
import Logo from "../sections/Logo";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Showroom from "../sections/Showroom";
import Home from "../sections/Home";
import About from "../sections/About";
import Team from "../sections/Team";
import Login from "./login/Login";
// import MintSection from "../sections/MintSection";

const Section = styled.section`
  width: 100vw;
  background-color: black;
  #thehiddennav {
    display: none;
  }
  @media (max-width: 777px) {
    .thenav {
      display: none;
    }
    .button1 {
      display: none;
    }
    .logo {
      display: none;
    }
    #thehiddennav {
      display: inline;
    }
  }
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  @media (max-width: 777px) {
    display: none;
    .button1 {
      display: none;
    }
    .logo {
      display: none;
    }
  }

  background-color: ${(props) => props.theme.body};
  border-bottom: 1px solid black;
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media (max-width: 777px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  @media (max-width: 777px) {
    font-size: ${(props) => props.theme.fontxl};
    color: ${(props) => props.theme.text};
  }

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 3px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  a:hover {
    color: white;
  }
`;

function Navigation() {
  return (
    <>
      <Section>
        <Router>
          <NavBar className="thenav" style={{}}>
            <Logo className="logo" />
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Showroom">Showroom</Link>
              </MenuItem>
              {/* <MenuItem ><Link to="/Team">Team</Link></MenuItem> 
              <MenuItem>
                <Link to="/MintSection">Mint</Link>
              </MenuItem> */}
              <MenuItem>
                <Link to="/About">About</Link>
              </MenuItem>
            </Menu>
            <Login className="button1" />
          </NavBar>
          <nav
            className="navbar navbar-dark bg-black fixed-top"
            id="thehiddennav"
          >
            <div className="container-fluid">
              <Logo />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div
                  className="offcanvas-header"
                  style={{ backgroundColor: "black" }}
                >
                  <Logo />

                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ backgroundColor: "white" }}
                  ></button>
                </div>
                <div
                  className="offcanvas-body"
                  style={{ backgroundColor: "black" }}
                >
                  <Menu>
                    <MenuItem>
                      <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/Showroom">Showroom</Link>
                    </MenuItem>
                    {/*  <MenuItem>
                      <Link to="/MintSection">Mint</Link>
  </MenuItem> */}
                    <MenuItem>
                      <Link to="/About">About</Link>
                    </MenuItem>

                    <Login />
                  </Menu>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/About" element={<About />}></Route>

            <Route path="/Team" element={<Team />}></Route>
            <Route path="/Showroom" element={<Showroom />}></Route>
            {/*  <Route path="/MintSection" element={<MintSection />}></Route> */}

            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </Section>
    </>
  );
}

export default Navigation;
