import { useContext } from "react";
import TitleDesc from "../components/TitleDesc";
import { MapContainer } from "../styles/Map.styled";
import { ThemeContext } from "./_app";

const Map = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <TitleDesc
        title="Jayesh's Location"
        desc="Here mentioned location of Jayesh."
      />
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.32728792598!2d76.22046682915997!3d21.298797248621796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37ae240af9e11fd!2zMjHCsDE3JzU1LjciTiA3NsKwMTMnMTUuNyJF!5e0!3m2!1sen!2sin!4v1658329089863!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0px", ...(darkMode && { filter: "invert(90%)" }) }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
    </div>
  );
};
export default Map;
