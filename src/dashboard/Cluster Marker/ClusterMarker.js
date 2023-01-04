import React, { useState } from "react";
import Marker from "./Marker/Marker";
import MarkerCounter from "./MarkerCounter";
import MarkerGroup from "./MarkerGroup";

const ClusterMarker = ({ points }) => {
  const [clusterFaceMarkers, setClusterFaceMarkers] = useState(
    points.slice(0, 2)
  );

  return (
    <MarkerGroup length={points.length}>
      {clusterFaceMarkers.map((marker) => (
        <Marker
          key={marker.id}
          lat={marker.lat}
          lng={marker.lng}
          name={marker.id}
          inGroup
        />
      ))}
      {points.length > 2 && <MarkerCounter>+{points.length - 2}</MarkerCounter>}
    </MarkerGroup>
  );
};

export default ClusterMarker;
