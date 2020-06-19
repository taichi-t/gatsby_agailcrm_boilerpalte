const axios = require("axios")
require("dotenv").config()
let Base64 = require("js-base64").Base64

// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
export function handler(event, context, callback) {
  axios
    .post(process.env.GATSBY_URL, event.body, {
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
}
