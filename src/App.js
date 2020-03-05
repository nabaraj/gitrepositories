import React, { useState } from "react";

import GitUser from "./component/gituser";
import LoginUser from "./component/login";
import "./App.css";

function App() {
  const [isLogged, login] = useState(false);
  return (
    <div className="App">
      <h1 className="text-center">Github Timeline</h1>
      {!isLogged ? <LoginUser /> : <GitUser />}
    </div>
  );
}

export default App;
