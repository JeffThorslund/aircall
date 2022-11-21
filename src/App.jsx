import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import { archiveCallById, getAllCalls } from "./requests";

const useCalls = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    getAllCalls().then((calls) => setCalls(calls));
  }, []);

  const setUpdatedCallList = (id, newArchiveState) => {
    return archiveCallById(id, newArchiveState).then((updatedCall) => {
      const updatedCalls = calls.map((call) => {
        if (updatedCall.id === call.id) {
          return updatedCall;
        }

        return call;
      });

      setCalls(updatedCalls);
    });
  };

  return {
    calls,
    methods: {
      archive: (id) => setUpdatedCallList(id, true),
      unarchive: (id) => setUpdatedCallList(id, false),
    },
  };
};

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
