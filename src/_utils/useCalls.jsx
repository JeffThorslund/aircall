import { useEffect, useState } from "react";
import { archiveCallById, getAllCalls } from "../requests";

export const useCalls = () => {
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
