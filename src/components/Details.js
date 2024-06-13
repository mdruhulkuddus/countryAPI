import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Navbarr from "./Navbarr";

const Details = () => {

    const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { countryName } = useParams();
  const location = useLocation();
  const country = location.state.country;
  const navigate = useNavigate();
  // console.log(country);
  return (
    <div className={`wrapper ${theme}`} style={{height:"200vh"}}>
      <Navbarr theme={theme}  toggle_mode={toggle_mode}/>
      <div
        style={{ justifyContent: "center", marginTop: "50px", display: "flex" }}
      >
        <Card style={{ width: "40rem" }}>
          <Card.Img
            variant="top"
            src={country.flags.png}
            alt={`${countryName} flag`}
          />
          <Card.Body>
            <Card.Title>{countryName}</Card.Title>
            <Card.Text>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </Card.Text>
            <Card.Text>
              <strong>Region:</strong> {country.region}
            </Card.Text>
            <Card.Text>
              <strong>Capital:</strong> {country.capital}
            </Card.Text>
            <Card.Text>
              <strong>Subregion:</strong> {country.subregion}
            </Card.Text>
            <Card.Text>
              <strong>Languages:</strong>{" "}
              {Object.values(country.languages).join(", ")}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{ justifyContent: "center", marginTop: "20px", display: "flex" }}
      >
        <Button
          variant="outline-success"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Details;
