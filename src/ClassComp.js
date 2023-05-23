import React from "react";
import ClassCompWithClosure from "./ClassCompWithClosure";

class ClassComp extends React.Component {
  state = { user: "" };
  showMessage = () => alert("Followed " + this.state.user);
  handleClick = () => setTimeout(this.showMessage, 4000);

  render() {
    return (
      <div style={{ margin: "20px 100px", textAlign: "left" }}>
        Class component will display the <b> updated value </b> because of the
        nature of this itself. Everything inside 'this' is and always has been
        mutable. That’s actually the <u>purpose of 'this'</u>,{" "}
        <b>
          {" "}
          to update or mutate the properties inside the 'this' including the
          state and props.{" "}
        </b>
        <span style={{ display: "block" }}>
          However, that behaviour is sometimes preferred and sometimes is not.
          If I’m the user that is interacting with this application, I might
          expect to always display the updated value which is the current
          behaviour.
        </span>
        <br />
        <input
          value={this.state.user}
          onChange={(e) => this.setState({ user: e.target.value })}
        />
        <button onClick={this.handleClick}>Click for updated value</button>
        <ClassCompWithClosure />
      </div>
    );
  }
}

export default ClassComp;
