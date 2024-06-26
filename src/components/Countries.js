import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Pagination from "./Pagination";

const Countries = (props) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(8);

  let lastIndexPost = currentPage * cardPerPage;
  let firstIndexPost = lastIndexPost - cardPerPage;
  let currentCuntries = props.countries.slice(firstIndexPost, lastIndexPost);
  return (
    <div>
      {/* <NavBar /> */}
      <Container>
        <Row className="justify-content-center mt-2">
          {currentCuntries.map((country) => {
            const countryNew = { country, id: uuidv4() };

            return (
              <Col md={3} className="mb-4 d-flex justify-content-center">
                <Country
                  {...countryNew}
                  key={countryNew.id}
                  onRemoveCountry={props.onRemoveCounrty}
                />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Pagination
        totalCountriesCard={props.countries.length}
        cardPerPage={cardPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Countries;
