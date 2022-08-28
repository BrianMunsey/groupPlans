import React from "react";
import "./App.css";
import { Testfile } from "./components/Testfile.js";
import { WeatherDays } from "./components/WeatherDays.js";
import { APIdata } from "./components/APIdata.js";
import APIkey from "./myAPI.js";

const mainPage = document.querySelector("#root");

const myLongitude = "-83.093948";
const myLatitude = "39.881851";

function App (props) {
      return (
      <div>
        <APIdata apiKey={APIkey} myLongitude={myLongitude}  myLatitude={myLatitude}/>
      </div>
    );
  }
  console.log(APIkey);

// function fetchAPI() {
//   fetch("https://api.openweathermap.org/data/3.0/onecall?lat=" + myLatitude +"&lon=" + myLongitude + "&units=imperial&exclude=alerts,hourly,minutely,current&appid=" + apiKey)
//   .then(res => res.json())
//   .then(data =>{
//     APIdata = data;
//     transferData(APIdata);
//   })
//   .catch()
//   console.log("Well Shit")
// }

// let maxTemp;
// let minTemp;
// let weather;
// let i = 0;
// const days = 8;

// function transferData(APIdata) {
//   maxTemp = APIdata.daily[0].temp.max;
//   minTemp = APIdata.daily[0].temp.min;
//   weather = APIdata.daily[0].weather[0].description;

//   while(i < days){
//     mainPage.innerHTML += APIdata.daily[i].temp.max;
//     mainPage.innerHTML += "---";
//     i++;
//   }

//   makeView();
// }

// fetchAPI();

// function makeView() {

// mainPage.innerHTML = maxTemp;
// mainPage.innerHTML += minTemp;
// mainPage.innerHTML += weather;
//   console.log(APIdata);
// }

export default App;
