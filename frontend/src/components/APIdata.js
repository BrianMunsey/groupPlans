import React from "react";
import { useState } from "react";

export function APIdata(props) {
  const [data, setData] = useState([]);

  let isLoaded = false;

  const APIfetch = () => {
    fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat=" +
        props.myLatitude +
        "&lon=" +
        props.myLongitude +
        "&units=imperial&exclude=alerts,hourly,minutely,current&appid=" + props.apiKey
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        isLoaded = true;
      })
      .catch();
  };
    // if(isLoaded){
    //     console.log("here");
    //     <h1>
    //     {data.daily.map((day) => (
    //         <p>day.lat</p>
    //     ))}
    //     </h1>
    //     }
    //                  call the fetch before the element gets rendered
    if (isLoaded){
      return (
        <>
          <h1>
            {data.daily.map((day) => (
              <p>day.lat</p>
            ))}
          </h1>
        </>
      )
    }
  return (
    <div>
      <button onClick={APIfetch} >Button</button>
      
    </div>
  );
}

export default APIdata;