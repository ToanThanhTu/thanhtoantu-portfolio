import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

function Weather() {
  const { name, temp, description, humidity, wind, imgUrl } =
    useContext(WeatherContext) || {};

  return (
    <div className="text-sm hidden md:block">
      <div className="flex items-center justify-end">
        <img src={imgUrl} alt={description} className="size-8 inline" />
        <p>
          {temp}, {name}
        </p>
      </div>
      <p className="flex items-center justify-end">
        <WaterDropIcon className="text-primary-cyan pr-1" /> {humidity}{" "}
        <AirIcon className="py-1" /> {wind}
      </p>
    </div>
  );
}

export default Weather;
