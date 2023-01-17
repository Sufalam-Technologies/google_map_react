import { Alert } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

const ShapesMap = () => {
  const handleApiLoaded = (map, maps) => {
    const rectangle = new maps.Rectangle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      bounds: {
        north: 38.976449,
        south: 40.4773763,
        east: -104.5706628,
        west: -108.2698377
      }
    });

    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 }
    ];

    var bermudaTriangle = new maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);

    const flightPlanCoordinates = [
      { lat: 14.628434, lng: -90.522713 },
      { lat: 23.0496492, lng: -82.9074202 },
      { lat: 29.8159358, lng: -95.9756853 },
      { lat: 19.3982805, lng: -99.1711759 }
    ];
    const flightPath = new maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);

    const citymap = {
      chicago: {
        center: { lat: 41.878, lng: -87.629 },
        population: 2714856
      },
      newyork: {
        center: { lat: 40.714, lng: -74.005 },
        population: 8405837
      },
      losangeles: {
        center: { lat: 34.052, lng: -118.243 },
        population: 3857799
      },
      vancouver: {
        center: { lat: 49.25, lng: -123.1 },
        population: 603502
      }
    };

    for (const city in citymap) {
      // Add the circle for this city to the map.
      const cityCircle = new maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100
      });
    }
  };

  return (
    <>
      <Alert key={"info"} variant={"info"}>
        <span className="fw-bold fs-5">Google Maps - Shapes</span>
      </Alert>
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={{ lat: 24.886, lng: -70.268 }}
          defaultZoom={4}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default ShapesMap;
