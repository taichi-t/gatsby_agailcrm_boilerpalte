import React from "react"
import { useForm } from "../hooks/useForm"

const fetchUrl = async (state, url, apiKey, userName) => {
  const data = {
    properties: [
      {
        type: "SYSTEM",
        name: "first_name",
        value: state.first_name,
      },
      {
        type: "SYSTEM",
        name: "first_name",
        value: state.first_name,
      },
    ],
  }

  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(userName + ":" + apiKey).toString("base64"),
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })

  const json = await response.json()
  console.log(json)
}

export const Form = () => {
  const { state, handleChange } = useForm()

  const url = process.env.GATSBY_URL
  const apiKey = process.env.GATSBY_API_KEY
  const userName = process.env.GATSBY_USERNAME

  const handleSubmit = e => {
    e.preventDefault()
    fetchUrl(state, url, apiKey, userName)
  }

  return (
    <div>
      <form>
        <label>
          First name
          <input
            aria-label="First name"
            id="first_name"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={state.firstName}
          />
        </label>
        <label>
          Last name
          <input
            aria-label="Last name"
            id="last_name"
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
