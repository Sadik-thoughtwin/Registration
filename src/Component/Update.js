import Header from "./Header";
import { useState } from "react";

export default function Update() {
  const [name, setName] = useState("");

  return (
    <>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <h2>Update Product</h2>
        <br />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="update email id "
        />
        <br />
        <br />
      </div>
    </>
  );
}
