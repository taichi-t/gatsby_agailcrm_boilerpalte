const postRequest = async (url, data) => {
  await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    credentials: "include",
  })
    .then(response => response.json())
    .then(json => console.log(json))
}

export default postRequest
