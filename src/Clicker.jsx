function Clicker() {
  const handleClick = () => {
    alert("You clicked the button!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
export default Clicker;