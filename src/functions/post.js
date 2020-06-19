const axios = require("axios")
var Base64 = require("js-base64").Base64

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  axios
    .post(URL, event.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Base64.encode(
          process.env.GATSBY_USERNAME + ":" + process.env.GATSBY_API_KEY
        )}`,
      },
    })
    .then(({ data: data }) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch(e => ({
      statusCode: 400,
      body: e,
    }))
  // .callback(null, {
  //   // return null to show no errors
  //   statusCode: 200, // http status code
  //   body: JSON.stringify({
  //     msg: "Hello, World! " + Math.round(Math.random() * 10),
  //   }),
  // })
}

// Authorization: `Basic ${btoa(
//   process.env.GATSBY_USERNAME + ":" + process.env.GATSBY_API_KEY
// )}`,
