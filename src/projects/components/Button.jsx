export default function Button({ title, onClick, position = "center" }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ alignSelf: position, cursor: "pointer" }}
        className="button h5"
      >
        {title ? title : "click me"}
      </button>
    </>
  );
}
