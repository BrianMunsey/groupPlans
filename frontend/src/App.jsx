import React from "react";
import "./App.css";
import { Testfile } from "./components/Testfile.js";
import { WeatherDays } from "./components/WeatherDays.js";
import myAPI from "./myAPI.js";

const mainPage = document.querySelector("#root");

let APIdata;
const apiKey = myAPI;
const myLongitude = "-83.093948";
const myLatitude = "39.881851";

class App extends React.Component() {
  // construtor(props) {
  //   super(props);
  //   this.state = {
  //     APIdata: data,
  //   };
  // }      or we can use the following

  state = {
    APIdata: data,
  };

  render() {
    return (
      <div>
        <WeatherDays APIdata={this.state.APIdata} />
      </div>
    );
  }
}

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
