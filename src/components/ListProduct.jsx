function ListProduct() {
  const fruits = ["tufaax", "moos", "canbuulo", "liin", "muus"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
export default ListProduct;