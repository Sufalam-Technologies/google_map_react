import { Card } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const LocalIndia = () => {
  return (
    <>
      <Card className="col-12">
        <div style={{ height: "75vh", width: "100%" }}>
          <GoogleMapReact
            key={"indai"}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP_KEY,
              region: "IN",
              language: "hi",
              id: "3"
            }}
            defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
            defaultZoom={8}
          ></GoogleMapReact>
        </div>
      </Card>
    </>
  );
};

export default LocalIndia;
