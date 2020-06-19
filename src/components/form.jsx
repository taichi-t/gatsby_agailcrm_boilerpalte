import React from "react"
import { useForm } from "../hooks/useForm"
import postRequest from "../lib/postRequest"

export const Form = () => {
  const { state, handleChange } = useForm()

  const data = {
    properties: [
      {
        type: "SYSTEM",
        name: "first_name",
        value: state.first_name,
      },
      {
        type: "SYSTEM",
        name: "last_name",
        value: state.last_name,
      },
    ],
  }

  const handleSubmit = e => {
    e.preventDefault()
    postRequest("/.netlify/functions/post", data).then(res => {
      console.log(res)
    })
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
