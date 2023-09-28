import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-full md:w-[22rem] glassCard p-4">
      <div className="flex w-full justify-center items-center flex-col md:flex-row gap-4 mt-4 md:mt-12 mb-4">
        <img src={icon} alt="weather_icon" />
        <p className="font-bold text-3xl md:text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-lg md:text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-2 md:mt-4">
        <p className="text-sm md:text-base text-center p-2">{new Date().toDateString()}</p>
        <p className="text-sm md:text-base text-center p-2">{time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-2 md:mt-4 gap-2 md:gap-4">
        <p className="text-xs md:text-sm text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <span className="font-normal">{windspeed} km/h</span>
        </p>
        <p className="text-xs md:text-sm text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <span className="font-normal">{humidity} gm/m&#179;</span>
        </p>
      </div>
      <div className="w-full p-2 md:p-3 mt-2 md:mt-4 flex justify-between items-center">
        <p className="text-sm md:text-base font-semibold">Heat Index</p>
       
        <p className="text-sm md:text-base">
  {heatIndex !== null ? heatIndex : 'N/A'}
</p>
      </div>
      <hr className="bg-slate-600 mt-2 md:mt-4" />
      <div className="w-full p-2 md:p-4 flex justify-center items-center text-lg md:text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
