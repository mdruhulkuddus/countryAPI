import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Search from './Search';

const Navbarr = ({filteredCountries, theme, toggle_mode, handleSearch}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar" sticky="top">
    <Container fluid>
      <Navbar.Brand href="/">Courtrey Info</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav 
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">API</Nav.Link>
          <Nav.Link href="#action2">
            {filteredCountries && filteredCountries.length}
          </Nav.Link>
        </Nav>
        <Navbar.Text className="me-3 ">
          {theme === "light" ? (
            <div onClick={toggle_mode} style={{ cursor: "pointer" }}>
              <MdOutlineLightMode />
              <span> Light Mode </span>
            </div>
          ) : (
            <div onClick={toggle_mode} style={{ cursor: "pointer" }}>
              <MdOutlineDarkMode />
              <span> Dark Mode </span>
            </div>
          )}
        </Navbar.Text>

        {handleSearch && <Search onSearch={handleSearch} />}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarr
