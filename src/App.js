import React, { useState } from "react";
import axios from "axios";
import GitUser from "./component/gituser";
import LoginUser from "./component/login";
import "./App.css";

function App() {
  const [isLogged, login] = useState(false);
  const [repo, setRepo] = useState([]);
  const setUser = (username, email) => {
    axios.get(`https://api.github.com/users/${username}/repos`).then(result => {
      console.log("ree", result);
      let data = result.data.sort((a, b) => {
        var adate = new Date(a.created_at);
        var bdate = new Date(b.created_at);

        return adate.getTime() - bdate.getTime();
      });
      setRepo(data);
      login(true);
    });
  };
  return (
    <div className="App">
      <h1 className="text-center">Github Timeline</h1>
      {!isLogged ? (
        <LoginUser submitLogin={setUser} />
      ) : (
        <GitUser repo={repo} />
      )}
    </div>
  );
}

export default App;
