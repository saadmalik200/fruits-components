import { useState } from "react";

function Fruits() {
  const fruits = ["apple", "mango", "banana"];
  const colors = ["green", "red", "yellow", "blue", "pink"];
  const [fruitsState, setFruitsState] = useState(fruits);
  const [colorsState, setColorsState] = useState(["red", "red", "red"]);

  const handleDelete = (idx) => {
    const oldFruitsState = [...fruitsState];
    oldFruitsState.splice(idx, 1);
    setFruitsState(oldFruitsState);
  };

  const handleChange = (item, idx) => {
    const oldColorsState = [...colorsState];

    if (item === "apple") {
      oldColorsState[idx] = colors[4];
      setColorsState(oldColorsState);
    }
    if (item === "mango") {
      oldColorsState[idx] = colors[0];
      setColorsState(oldColorsState);
    }
    if (item === "banana") {
      oldColorsState[idx] = colors[2];
      setColorsState(oldColorsState);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-[3rem] mb-5">Fruit Component</h1>
      <div>
        {fruitsState.map((item, i) => (
          <div className="flex gap-4 mb-5 text-[1.5rem]" key={i}>
            {" "}
            <p className={` w-[6rem]`}>{item}</p>{" "}
            <p className={` w-[12rem]`}>color = {colorsState[i]}</p>
            <button
              className="border-2 bg-blue-200"
              onClick={() => handleChange(item, i)}
            >
              Change color
            </button>
            <button className="bg-red-300" onClick={() => handleDelete(i)}>
              Delete Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fruits;
