export default function Popup({ type, triggerCheck, handleClose }) {
  return (
    triggerCheck && (
      <div
        style={{
          padding: "1rem 1rem",
          backgroundColor: `${type}`,
          borderRadius: "5px",
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
        }}
      >
        <div>
          <h1 className="h5" style={{ margin: "0" }}>
            Alert Popup
          </h1>
          <h2 style={{ margin: "0", fontSize: "1rem" }}>
            This popup was triggered by a delay
          </h2>
        </div>
        <button
          className="button"
          onClick={() => handleClose(false)}
          style={{ placeSelf: "center" }}
        >
          X
        </button>
      </div>
    )
  );
}
