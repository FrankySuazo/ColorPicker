// Write your Color component here
import { userState } from "react";


const Color = ({ color, setFunction }) => {
  const [selected, setSelected] = userState("");
  return (
    <div
      className={`${color} ${selected}`}
      onClick={() => {
        setSelected(selected === "selected" ? "" : "selected");
        setFunction(color);
      }}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = userState("blue");
  return (
    <div id="container">
      <div id="navbar">
        <div> Currently Selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {
          <>
            <Color color="blue" setFunction={setSelectedColor} />
            <Color color="red" setFunction={setSelectedColor} />
            <Color color="violet" setFunction={setSelectedColor} />
          </>
        }
      </div>
    </div>
  );
};

export default App;
