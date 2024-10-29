import React, { useState } from "react";

const About = () => {
  const [val, setval] = useState([{name: "Aayush", age: 20}, {name: "shivam", age: 24}, {name: "Kohli", age: 33}]);

  return (
    <div className="p-5">
      {val.map((items, index) => (
        <div key={index}>
        <h1>{items.name}</h1>
        <h1>{items.age}</h1>
        </div>
      ))}
      <button
        onClick={() =>
          setval(() => val.map((items)=> items.name === "shivam" ? {name: "shivam", age: 32}: items) )
        }
        className="p-3 bg-black mt-5 text-white rounded-md"
      >
        Button
      </button>
    </div>
  );
};

export default About;
