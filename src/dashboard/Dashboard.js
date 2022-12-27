import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../common/card-wrapper/CardWrapper";

const Dashboard = ({}) => {
  const history = useNavigate();

  return (
    <>
      <Stack direction="horizontal" gap={2} className="col-md-8 mx-auto mt-5">
        <CardWrapper
          title={"Default Map"}
          description={
            "Build dynamic, interactive, deeply customized maps, location, and geospatial experiences for your web apps"
          }
          onClickOfPositiveButton={() => {
            history("/map/default");
          }}
        />

        <CardWrapper
          title={"Map with Custom Marker"}
          description={
            " Add a simple Google map with a marker. It suits people with knowledge of HTML and CSS, and a little knowledge of JavaScript."
          }
          onClickOfPositiveButton={() => {
            history("/map/marker");
          }}
        />

        <CardWrapper
          title={"Map with Types"}
          description={
            "There are four types of maps available. In addition to the familiar 'painted' road map tiles"
          }
          onClickOfPositiveButton={() => {
            history("/map/types");
          }}
        />

        <CardWrapper
          title={"Localizing the Map"}
          description={
            "Specify a region code, which alters the map's behavior based on a given country or territory."
          }
          onClickOfPositiveButton={() => {
            history("/map/locale");
          }}
        />
      </Stack>

      <Stack direction="horizontal" gap={2} className="col-md-8 mx-auto mt-5">
        <CardWrapper
          title={"Map with Cluster Marker"}
          description={
            "Combine markers of close proximity into clusters, and simplify the display of markers on the map."
          }
          onClickOfPositiveButton={() => {
            history("/map/cluster-marker");
          }}
        />

        <CardWrapper
          title={"Map with Shapes"}
          description={
            "A shape is an object on the map, tied to a latitude/longitude coordinate"
          }
          onClickOfPositiveButton={() => {
            history("/map/shapes");
          }}
        />

        <CardWrapper
          title={"Map with Boundaries"}
          description={
            "Data-driven styling lets you target regions by place ID or display name, and apply custom styling to boundary polygons on the map."
          }
          onClickOfPositiveButton={() => {
            history("/map/boundaries");
          }}
        />

        <CardWrapper
          title={"Map with Info Window"}
          description={
            " An InfoWindow displays content (usually text or images) in a popup window above the map, at a given location."
          }
          onClickOfPositiveButton={() => {
            history("/map/infowindow");
          }}
        />
      </Stack>
    </>
  );
};

export default Dashboard;
