import { Alert } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import markerJson from "../../mock/marker-list.json";
import Marker from "../../common/marker/Marker";
import Toaster from "../../common/toast-wrapper/Toast";
import mapStyles from "./mapStyles.json";
import supercluster from "points-cluster";
import { markersData, susolvkaCoords } from "./fakeData";
import ClusterMarker from "./ClusterMarker";

const MAP = {
  defaultZoom: 8,
  defaultCenter: susolvkaCoords,
  options: {
    styles: mapStyles,
    maxZoom: 19
  }
};

const ClusterMarkerMap = () => {
  const [isToastShow, setToastShow] = useState(false);
  const [markerList] = useState(markerJson);
  const [message, setMessage] = useState("");
  const [clusters, setClusters] = useState([]);
  const [mapOptions, setMapOptions] = useState({
    center: MAP.defaultCenter,
    zoom: MAP.defaultZoom
  });

  console.log("clusters", clusters);

  const handleToasterShow = () => {
    setToastShow(true);
  };

  const handleToasterHide = () => {
    setToastShow(false);
  };

  const handleClickOnMarker = () => {
    handleToasterShow();
  };

  const options = () => {
    return {
      options: {
        styles: mapStyles,
        maxZoom: 19
      }
    };
  };

  const getClusters = () => {
    const clusters = supercluster(markersData, {
      minZoom: 0,
      maxZoom: 16,
      radius: 60
    });

    return clusters(mapOptions);
  };

  const createClusters = () => {
    setClusters(
      mapOptions.bounds
        ? getClusters().map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
            points
          }))
        : []
    );
  };

  const handleMapChange = ({ center, zoom, bounds }) => {
    setMapOptions({
      center,
      zoom,
      bounds
    });
    setTimeout(() => {
      createClusters();
    }, 500);
  };

  return (
    <>
      <Alert key={"info"} variant={"info"}>
        <span className="fw-bold fs-5">Google Maps - Markers</span>
      </Alert>
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
          defaultZoom={5}
          yesIWantToUseGoogleMapApiInternals
          options={options}
          onChange={handleMapChange}
        >
          {clusters.map((item) => {
            if (item.numPoints === 1) {
              return (
                <Marker
                  key={item.id}
                  lat={item.points[0].lat}
                  lng={item.points[0].lng}
                />
              );
            }

            return (
              <ClusterMarker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                points={item.points}
              />
            );
          })}
        </GoogleMapReact>
      </div>
      <Toaster
        isToastShow={isToastShow}
        handleToasterHide={handleToasterHide}
        variant={"success"}
        message={message}
      />
    </>
  );
};

export default ClusterMarkerMap;
