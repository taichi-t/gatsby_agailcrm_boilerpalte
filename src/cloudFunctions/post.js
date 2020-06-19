// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  console.log(event.headers)
  callback(null, {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Hello, World! " + Math.round(Math.random() * 10),
    }),
  })
}

// import fetch from "node-fetch";

// const API_ENDPOINT = "https://icanhazdadjoke.com/";

// exports.handler = async (event, context) => {
//   return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
//     .then(response => response.json())
//     .then(data => ({
//       statusCode: 200,
//       body: data.joke
//     }))
//     .catch(error => ({ statusCode: 422, body: String(error) }));
// };
