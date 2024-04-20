export default function Button({ title }) {
  return (
    <>
      <button className="button h5">{title ? title : "click me"}</button>
    </>
  );
}
