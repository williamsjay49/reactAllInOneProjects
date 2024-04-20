export const Progressbar = ({ bgColor, completed }) => {
  const containerStyle = {
    height: 30,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#e0e0de",
    margin: 20,
  };

  const fillerStyle = {
    height: "100%",
    backgroundColor: `${bgColor}`,
    borderRadius: "inherit",
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
    textAlign: "right",
  };

  const labelStyles = {
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
    padding: 10,
  };
  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
