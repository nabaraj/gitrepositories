import React, { useEffect, useState } from "react";
import axios from "axios";

function GitUser(props) {
  const [repo, setRepo] = useState([]);
  const [resultLoaded, setLoader] = useState(false);

  useEffect(() => {
    if (!resultLoaded) {
      setLoader(true);
      axios.get("https://api.github.com/users/nabaraj/repos").then(result => {
        console.log("ree", result);
        setRepo(result.data);
      });
    }
  }, [resultLoaded]);
  const genarateDate = dateValue => {
    var date = new Date(dateValue);
    return (
      <span className="time">
        {date.getFullYear()} -{" "}
        {date.toLocaleString("default", { month: "long" })}
      </span>
    );
  };
  return (
    <div>
      <ul className="timeline">
        {repo.map((item, index) => (
          <li key={item.id}>
            <div
              className={`${
                index === 0 || index % 2 === 0 ? "direction-r" : "direction-l"
              }`}
            >
              <div className="flag-wrapper">
                <span className="flag">{item.name}</span>
                <span className="time-wrapper">
                  {genarateDate(item.created_at)}
                </span>
              </div>
              <div className="desc">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitUser;
