import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import storm from "../assets/icons/storm.png";
import snow from "../assets/icons/snow.png";
import wind from "../assets/icons/windy.png";

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

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
    <div className="glassCard w-full md:w-[10rem] p-4 flex flex-col">
      <p className="text-center text-sm md:text-base">
        {new Date(time).toLocaleTimeString("en", { weekday: "long" }).split(" ")[0]}
      </p>
      <hr className="mt-2 md:mt-4" />
      <div className="w-full flex justify-center items-center flex-1">
        <img src={icon} alt="Forecast not available" className="h-[4rem] md:h-[6rem] object-contain" />
      </div>
      <p className="text-center font-bold text-sm md:text-base">{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;