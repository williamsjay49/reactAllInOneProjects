export default function Button({ title, onClick }) {
  return (
    <>
      <button onClick={onClick} className="button h5">
        {title ? title : "click me"}
      </button>
    </>
  );
}
