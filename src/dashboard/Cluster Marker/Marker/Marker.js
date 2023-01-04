import React from "react";
import Spy from "../Spy";
import MarkerInGroupStyled from "./MarkerInGroupStyled";
import MarkerStyled from "./MarkerStyled";

const Marker = ({ inGroup = false }) => {
  return (
    <div>
      {inGroup ? (
        <MarkerInGroupStyled>
          <Spy scale="0.55" />
        </MarkerInGroupStyled>
      ) : (
        <MarkerStyled>
          <Spy scale="0.55" />
        </MarkerStyled>
      )}
    </div>
  );
};

export default Marker;
