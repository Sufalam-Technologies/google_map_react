import GoogleMapReact from "google-map-react";

const DefaultMap = () => {
  return (
    <>
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{ lat: 23.0104071, lng: 72.5050071 }}
          defaultZoom={12}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default DefaultMap;
