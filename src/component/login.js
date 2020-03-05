import React, { useEffect, useState } from "react";

function LoginUser(props) {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <h3>Provide username and email to view repositories</h3>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
