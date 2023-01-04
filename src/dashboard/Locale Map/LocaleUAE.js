import { Card } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const LocaleUAE = () => {
  return (
    <>
      <Card className="col-12">
        <div style={{ height: "75vh", width: "100%" }}>
          <GoogleMapReact
            key={"arabic"}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP_KEY,
              region: "EG",
              language: "ar",
              id: "2"
            }}
            defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
            defaultZoom={8}
          ></GoogleMapReact>
        </div>
      </Card>
    </>
  );
};

export default LocaleUAE;
