import { useState } from "react";

import FuncCompNoClosure from "./FuncCompNoClosure";

function FuncComp(props) {
  const [user, setUser] = useState("");

  const showMessage = () => alert("Followed " + user);
  const handleClick = () => setTimeout(showMessage, 5000);

  return (
    <div style={{ margin: "20px 100px", textAlign: "left" }}>
      On the other hand, the functional component will behave{" "}
      <b> oppositely </b> because of the concept called closure. With Closure,
      the function will remember the current value of something even though the
      value will be changed in the future.
      <span style={{ display: "block" }}>
        Closure is an important and useful concept in functional programming.
        However, in this case, the behaviour is not expected and closure needs
        to be avoided.
      </span>
      <br />
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleClick}>Click for old value</button>
      <br />
      <br />
      <FuncCompNoClosure />
    </div>
  );
}

export default FuncComp;
