import React, { useEffect, useState } from "react";
import Countries from "./Countries";
import Search from "./Search";
import "./Style.css";
import Navbarr from "./Navbarr";

const url = `https://restcountries.com/v3.1/all`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      //   const response = await fetch(url);
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemoveCounntry = (name) => {
    const filtered = filteredCountries.filter(
      (country) => country.name.common !== name
    );

    setFilteredCountries(filtered);
    //  setCountries(filtered)
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
    // setCountries(newCountries);
  };

  return (
    <div className={`wrapper ${theme}`}>
      {/* <h1>Courtrey app - {filteredCountries && filteredCountries.length}</h1> */}
   <Navbarr filteredCountries={filteredCountries} theme={theme} toggle_mode={toggle_mode} handleSearch={handleSearch}/>

      {isLoading && <h2 className="text-center">Loading......</h2>}
      {error && <h2 className="text-center">{error.message}</h2>}
      {countries && (
        <Countries
          // countries={countries}
          countries={filteredCountries}
          onRemoveCounrty={handleRemoveCounntry}
        />
      )}
    </div>
  );
};

export default Home;
