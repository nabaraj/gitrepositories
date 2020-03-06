// import React, { useEffect, useState } from "react";

// function LoginUser(props) {
//   return (
//     <div className="login-page">
//       <div className="form">
//         <form className="login-form">
//           <h3>Provide username and email to view repositories</h3>
//           <input type="text" placeholder="username" />
//           <input type="text" placeholder="email" />
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginUser;
import React, { Component } from "react";

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: ""
    };
    this.changeValue = this.changeValue.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  changeValue(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  submitLogin(e) {
    e.preventDefault();
    this.props.submitLogin(this.state.username, this.state.email);
  }
  render() {
    let disabled = this.state.name === "";
    let userError = this.props.userError;
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.submitLogin}>
            <h3>Provide username to view repositories</h3>
            {userError !== "" ? (
              <span className="error">{this.props.userError}</span>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.name}
              onChange={this.changeValue}
            />
            {/* <input
              type="text"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.changeValue}
            /> */}
            <button disabled={disabled}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginUser;
