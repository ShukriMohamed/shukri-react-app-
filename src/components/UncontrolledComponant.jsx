import { useRef } from "react";

function UncontrolledComponant() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>show me</button>
    </div>
  );
}

export default UncontrolledComponant;
