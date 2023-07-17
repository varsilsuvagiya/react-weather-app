import React from "react";
import { styled } from "@mui/system";
import { TextField, Button, Typography } from "@mui/material";

const SearchBox = styled("form")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: 1px solid black;
  border-radius: 2px;

  & .MuiTextField-root {
    flex: 1;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
`;

const ChooseCityLabel = styled(Typography)`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const WelcomeWeatherLogo = styled("img")`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <>
      <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
      <ChooseCityLabel variant="h5">Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <TextField
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
