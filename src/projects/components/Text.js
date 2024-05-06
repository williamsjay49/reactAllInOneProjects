function Text({ title, size = "h3" }) {
  return <h1 className={size}>{title ? title : "Hello anything!"}</h1>;
}

export default Text;
