const Marker = ({ show, text, handleClickOnMarker }) => {
  return (
    <>
      <div
        onClick={() => {
          handleClickOnMarker();
        }}
        className="cursor-pointer"
      >
        <div className="pin"></div>
        <div className="pulse"></div>
      </div>
    </>
  );
};

export default Marker;
