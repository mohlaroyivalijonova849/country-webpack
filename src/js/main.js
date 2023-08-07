import "../css/main.css";
import { createCountries } from "./updateUI";
import "./filter";
import "./mode";
import request from "./request";
const API = "https://restcountries.com/v3.1/all";
request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
