const AIRCALL_ENDPOINT = "https://aircall-job.herokuapp.com"

export const getAllCalls = () => {

    const createEndpoint = () => AIRCALL_ENDPOINT + "/activities"

    return fetch(createEndpoint())
        .then((response) => response.json())
        .then((data) =>data);
}

export const getCallById = (id) => {

    const createEndpoint = (id) => AIRCALL_ENDPOINT + "/activities/" + id

    fetch(createEndpoint(id))
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export const archiveCallById = (id, newArchiveState) => {
    const createEndpoint = (id) => AIRCALL_ENDPOINT + "/activities/" + id

    const bodyData = {
        is_archived: newArchiveState
    }

    return fetch(createEndpoint(id), {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((data) => data);
}

export const resetCallsToInitialState = () => {
    const createEndpoint = () => AIRCALL_ENDPOINT + "/reset"

    fetch(createEndpoint())
        .then((response) => response.json())
        .then((data) => console.log(data));
}
