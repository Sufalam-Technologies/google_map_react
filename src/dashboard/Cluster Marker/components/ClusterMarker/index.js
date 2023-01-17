import { List } from "immutable";
import PropTypes from "prop-types";
import React from "react";
import ClusterMarkerWrapper from "../../../../common/cluster-wrapper/ClusterMarkerWrapper";

class ClusterMarker extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    clusterFaceMarkers: this.props.points.slice(0, 2)
  };

  render() {
    return (
      this.props.points.length > 2 && (
        <ClusterMarkerWrapper text={this.props.points.length} />
      )
    );
  }
}

ClusterMarker.propTypes = {
  points: PropTypes.array,
  users: PropTypes.instanceOf(List),
  selected: PropTypes.bool
};

export default ClusterMarker;
