import React from "react";
import GoogleMapReact from "google-map-react";
import supercluster from "points-cluster";
import ClusterMarker from "../ClusterMarker";
import mapStyles from "./mapStyles.json";
import { markersData, susolvkaCoords } from "../../fakeData";
import MapWrapper from "./MapWrapper";
import { Alert } from "react-bootstrap";
import Marker from "../../../../common/marker/Marker";

const MAP = {
  defaultZoom: 8,
  defaultCenter: susolvkaCoords,
  options: {
    styles: mapStyles,
    maxZoom: 19
  }
};

export class GoogleMap extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    mapOptions: {
      center: MAP.defaultCenter,
      zoom: MAP.defaultZoom
    },
    clusters: []
  };

  getClusters = () => {
    const clusters = supercluster(markersData, {
      minZoom: 0,
      maxZoom: 16,
      radius: 60
    });

    return clusters(this.state.mapOptions);
  };

  createClusters = (props) => {
    this.setState({
      clusters: this.state.mapOptions.bounds
        ? this.getClusters(props).map(({ wx, wy, numPoints, points }) => ({
            lat: wy,
            lng: wx,
            numPoints,
            id: `${numPoints}_${points[0].id}`,
            points
          }))
        : []
    });
  };

  handleMapChange = ({ center, zoom, bounds }) => {
    this.setState(
      {
        mapOptions: {
          center,
          zoom,
          bounds
        }
      },
      () => {
        this.createClusters(this.props);
      }
    );
  };

  render() {
    return (
      <>
        <Alert key={"info"} variant={"info"}>
          <span className="fw-bold fs-5">Google Maps - Cluster Markers</span>
        </Alert>
        <div style={{ height: "75vh", width: "100%" }}>
          <MapWrapper>
            <GoogleMapReact
              defaultZoom={MAP.defaultZoom}
              defaultCenter={MAP.defaultCenter}
              options={MAP.options}
              onChange={this.handleMapChange}
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAP_KEY
              }}
            >
              {this.state.clusters.map((item) => {
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
          </MapWrapper>
        </div>
      </>
    );
  }
}

export default GoogleMap;
