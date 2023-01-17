const ClusterMarkerWrapper = ({ text }) => {
  return (
    <div className="cursor-pointer">
      <div className="cluster">
        <div className="cluster-text text-center d-flex align-items-center min-vh-30">
          <span className="text-center w-100 text-white">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default ClusterMarkerWrapper;
