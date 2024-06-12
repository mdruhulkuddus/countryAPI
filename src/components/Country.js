import React from "react";
import { Card, Button, Row, Col, CardGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Country = (props) => {
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (countryName)=>{
    props.onRemoveCountry(countryName);
  }

  return (
   
    <Card style={{ width: "18rem", }}>
    <Card.Img variant="top" src={flags.png || 'default.png'} alt={name.common} />
    <Card.Body>
      <Card.Title>Name: {name.common}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        Official: {name.official}
      </Card.Subtitle>
      <Card.Text>
        <h6>Population: {population}</h6>
        <h6>Capital: {capital}</h6>
        <h6>Area: {area}</h6>
      </Card.Text>
      <Button variant="outline-success" className="m-2"> Details </Button>
      {/* <Link to={`/blogs/${title}`} state={{id, title, body}} className="btn btn-primary">Learn More</Link> */}
      <Link to={`/details/${name.common}`} className="btn btn-primary">Learn More</Link>
      <Button variant="outline-danger" onClick={()=>{
        handleRemoveCountry(name.common)
      }} > Remove </Button>
    </Card.Body>
  </Card>

  );
};

export default Country;
