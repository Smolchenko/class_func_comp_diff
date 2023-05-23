import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        What happens when you change the value of the input within the 5000ms
        interval?{" "}
      </h1>
      <h2>What values will be displayed? The old value or the updated one?</h2>
      Class <ClassComp />
      <br />
      Functional <FuncComp />
    </div>
  );
}
