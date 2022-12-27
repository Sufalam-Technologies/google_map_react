import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import Marker from "../../common/marker/Marker";
import Toaster from "../../common/toast-wrapper/Toast";
import markerJson from "../../mock/marker-list.json";

const MarkerMap = () => {
  const [isToastShow, setToastShow] = useState(false);
  const [markerList] = useState(markerJson);
  const [message, setMessage] = useState("");

  const handleToasterShow = () => {
    setToastShow(true);
  };

  const handleToasterHide = () => {
    setToastShow(false);
  };

  const handleClickOnMarker = () => {
    handleToasterShow();
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
        >
          {markerList.map((marker, index) => {
            const { name, lat, lng } = marker || {};
            return (
              <Marker
                key={`default-marker-${index}`}
                text={name}
                lat={lat}
                lng={lng}
                handleClickOnMarker={() => {
                  handleClickOnMarker();
                  setMessage(name);
                }}
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

export default MarkerMap;
