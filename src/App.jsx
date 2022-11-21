import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import { useCalls } from "./_utils/useCalls";

const App = () => {
  const { calls, methods } = useCalls();

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
              onClick={() => methods.archive(c.id)}
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
              onClick={() => methods.unarchive(c.id)}
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
