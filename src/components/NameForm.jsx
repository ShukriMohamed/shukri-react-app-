import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
      <div>
          <h2>hello, {name || "stranger"} !</h2>
      <input
        type="text"
        placeholder="gali magacaaga"
        value={name}
        onChange={handleChange}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}

export default NameForm;
