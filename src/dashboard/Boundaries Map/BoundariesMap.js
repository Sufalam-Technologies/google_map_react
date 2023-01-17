import { Alert } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const BoundariesMap = () => {
  const handleApiLoaded = (map, maps) => {
    let featureLayer = map.getFeatureLayer("LOCALITY");

    // Define a style with purple fill and border.
    //@ts-ignore
    const featureStyleOptions = {
      strokeColor: "#810FCB",
      strokeOpacity: 1.0,
      strokeWeight: 3.0,
      fillColor: "#810FCB",
      fillOpacity: 0.5
    };

    // Apply the style to a single boundary.
    //@ts-ignore
    featureLayer.style = (options) => {
      if (options.feature.placeId == "ChIJSdRbuoqEXjkRFmVPYRHdzk8") {
        return featureStyleOptions;
      }
    };
  };

  return (
    <>
      <Alert key={"info"} variant={"info"}>
        <span className="fw-bold fs-5">Google Maps - Default Map</span>
      </Alert>
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default BoundariesMap;
