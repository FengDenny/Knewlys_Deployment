import React from "react";
import Vows from "./sections/Vows";
import Gallery from "./sections/Gallery";
import VideoCover from "./sections/VideoCover";
import WeddingLocation from "./sections/WeddingLocations";

function Home() {
  return (
    <>
      <VideoCover />
      <Vows />
      <Gallery />
      <WeddingLocation />
    </>
  );
}
export default Home;
