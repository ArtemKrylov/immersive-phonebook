import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <ThreeCircles
      color="#1A365D"
      innerCircleColor="#1CD8D2"
      height="200"
      width="200"
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
