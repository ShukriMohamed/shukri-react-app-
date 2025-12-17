import { useState } from "react";

function Inputer() {
  const [text, setText] = useState("sharaf");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Type something" onChange={handleChange} />

      <p>You typed: {text}</p>
    </div>
  );
}

export default Inputer;
