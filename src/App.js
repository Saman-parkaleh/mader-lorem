import "./App.css";
import React, { useState } from "react";
import data from "./Data/Data";

function App() {
  const [cont, setCont] = useState(0);
  const [text, setText] = useState([]);

  const formonsubmit = (e) => {
    e.preventDefault();
    let mount = parseInt(cont);
    console.log(typeof mount);
    if (cont < 0) mount = 0;
    if (cont > 5) mount = 5 ;
    setText(data.slice(0, mount));
  };
  return (
    <div className="contaner">
      <div className="heder">
        <h1> maker lorem</h1>
      </div>
      <form onSubmit={formonsubmit}>
        <label className="label">number of paragraphs : </label>
        <input
          className="input"
          type={"number"}
          value={cont}
          name={"total"}
          onChange={(e) => setCont(e.target.value)}
        />
        <button className="btn" type="submit">
          maker
        </button>
      </form>
      <article>
        {text.map((item, index) => {
          return (
            <p className=" text" key={index}>
              {item}
            </p>
          );
        })}
      </article>
    </div>
  );
}
export default App;
