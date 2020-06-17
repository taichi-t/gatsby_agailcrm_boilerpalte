import { useState } from "react"

export const useForm = () => {
  const [state, setState] = useState({ first_name: "", last_name: "" })

  const handleChange = e => {
    e.persist()
    setState(state => ({ ...state, [e.target.id]: e.target.value }))
  }

  return { state, handleChange }
}
