const postRequest = async (url, data) => {
  console.log(data)
  await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
      Authorization: `Basic ${btoa(
        process.env.GATSBY_USERNAME + ":" + process.env.GATSBY_API_KEY
      )}`,
    }),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    credentials: "include",
  })
    .then(response => response.json())
    .then(console.log)
}

export default postRequest
