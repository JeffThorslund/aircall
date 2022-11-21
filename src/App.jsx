import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import { archiveCallById, getAllCalls } from "./requests";

const App = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    getAllCalls().then((calls) => setCalls(calls));
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
      <div>
        Activity
        {calls
          .filter((c) => !c.is_archived)
          .map((c) => (
            <div
              onClick={() => {
                archiveCallById(c.id, true).then(() => {
                  getAllCalls().then((calls) => setCalls(calls));
                });
              }}
              className={"item"}
              key={c.id}
            >
              {c.from}
            </div>
          ))}
      </div>

      <div>
        Archived
        {calls
          .filter((c) => c.is_archived)
          .map((c) => (
            <div
              className={"item"}
              onClick={() =>
                archiveCallById(c.id, false).then(() => {
                  getAllCalls().then((calls) => setCalls(calls));
                })
              }
              style={{ color: "red" }}
              key={c.id}
            >
              {c.from}
            </div>
          ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
