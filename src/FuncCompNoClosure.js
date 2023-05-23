import { useState, useRef, useEffect } from "react";

function FuncCompNoClosure(props) {
  const [user, setUser] = useState("");
  const userRef = useRef("");

  const showMessage = () => alert("Followed " + userRef.current);
  const handleClick = () => setTimeout(showMessage, 5000);
  // const updateUser = (e) => {
  //   const newValue = e.target.value;
  //   setUser(newValue);
  //   userRef.current = newValue;
  // };

  useEffect(() => {
    userRef.current = user;
  });

  return (
    <div>
      What to do if you have a function that needs to read the updated value in
      the future? <u>How can a function read the updated value?</u>
      <br />
      <br />
      <span style={{ display: "block" }}>
        We need to store the value in an object because the function will not
        closure the object value, but only the object memory pointer. So over
        time, we can mutate the object value.
      </span>
      <b> useRef </b> is the solution for this. For every updated value, you
      need to 1. store it in the state to trigger rerender and 2. store it in
      the useRef to <b> avoid the closure.</b>
      <br />
      <br />
      {/* <input value={user} ref={userRef} onChange={updateUser} /> */}
      <input
        value={user}
        ref={userRef}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleClick}>Click for updated value</button>
    </div>
  );
}

export default FuncCompNoClosure;
