const Marker = ({ show, place }) => {
  const markerStyle = {
    border: "1px solid white",
    borderRadius: "50%",
    height: 10,
    width: 10,
    backgroundColor: show ? "red" : "blue",
    cursor: "pointer",
    zIndex: 10
  };

  return (
    <>
      <div style={markerStyle} />
    </>
  );
};

export default Marker;

// {/* <Marker
//             key={"default"}
//             text={"Sufalam Technologies Pvt Ltd"}
//             lat={23.0104071}
//             lng={72.5050071}
//           /> */}
