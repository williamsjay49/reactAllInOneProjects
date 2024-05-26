function Text({ title, size = "h3", style }) {
  return (
    <h1 className={size} style={style}>
      {title ? title : "Hello anything!"}
    </h1>
  );
}

export default Text;
