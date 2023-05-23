import React from "react";

class ClassCompWithClosure extends React.Component {
  state = { user: "" };
  showMessage = (value) => alert("Followed " + value);
  // DOENST WORk
  // handleClick = () => {
  //   setTimeout(() => this.showMessage(this.state.user), 4000);
  // };
  // WORKS
  handleClick = () => {
    const { user } = this.state;
    setTimeout(() => this.showMessage(user), 3000);
  };

  render() {
    return (
      <div>
        <br />
        <u>On the other hand, how a class component can do closure?</u>
        <span style={{ display: "block" }}>
          The solution is simple, instead of reading the value directly from
          this, we can pass the value early in the method and the method will
          closure that value instead.
        </span>
        <br />
        <input
          value={this.state.user}
          onChange={(e) => this.setState({ user: e.target.value })}
        />
        <button onClick={this.handleClick}>Click for initial value</button>
      </div>
    );
  }
}

export default ClassCompWithClosure;
