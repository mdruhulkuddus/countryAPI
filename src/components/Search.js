import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    // alert(searchText);
  };

  useEffect(() => {
    props.onSearch(searchText);
    // alert(searchText)
  }, [searchText]);

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search.."
        className="me-2"
        aria-label="Search"
        onChange={handleChange}
      />
      <Button variant="outline-success">Search</Button>
    </Form>

  );
};

export default Search;

// <div style={{ textAlign: "center" }}>
// <input type="text" onChange={handleChange} placeholder="Search..." />
// </div>