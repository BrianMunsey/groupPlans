import React, { useState } from "react";
import "./App.css";
import APIkey from "./myAPI.js";
import "./App.css"

const mainPage = document.querySelector("#root");

const myLongitude = "-83.093948";
const myLatitude = "39.881851";

const week = ["Today", "Tomorrow", "Day after tomorrow", "Three days from now", "Four days from now", "Five days from now", "Six days from now", "Seven days from now", "Eight days from now"]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        days: [],
        DataisLoaded: false
    };

    this.newState = {
      ...this.state,
      week: week
    }

    this.count = -17;

}

  counter() {
  return this.count += 1;
}

  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
        myLatitude +
        "&lon=" +
        myLongitude +
        "&units=imperial&exclude=alerts,hourly,minutely,current&appid=" + APIkey
    )
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        days: json,
        DataisLoaded: true,
      });
    })
  }
  //try to get the map function to count through the days WIP
  render() {
    const { DataisLoaded, days} = this.newState;
    if(!DataisLoaded) return <div>
      <h1> The weather is loading</h1> </div> ;
    return (
      <div className="cardsList">
        {days.daily.map((day) => (
          <div>
            <h1>{days.week} </h1>
            <p>Temperature high of: {day.temp.max}°F</p>
            <p>Temperature low of: {day.temp.min}°F</p>
            <p>Weather description: {day.weather[0].description}</p>
            <button>Schedule</button>
            <input type="hidden" className="id_field" value={this.count}></input>
            {/* this needs to be changed, this wont work */}
          </div>
        ))}
      </div>
    )
  }

  }



export default App;
