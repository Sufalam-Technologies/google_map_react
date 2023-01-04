import GoogleMapReact from "google-map-react";
import { Alert } from "react-bootstrap";
const TypesMap = () => {
  const options = () => {
    return {
      mapTypeId: "roadmap",
      mapTypeControl: true,
      clickableIcons: true
    };
  };

  return (
    <>
      <Alert key={"info"} variant={"info"}>
        <span className="fw-bold fs-5">Google Maps - Map Types</span>
      </Alert>
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_KEY
          }}
          defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
          defaultZoom={12}
          options={options}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default TypesMap;
