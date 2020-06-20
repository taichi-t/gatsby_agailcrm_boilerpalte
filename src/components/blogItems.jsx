import React from "react"

export const BlogItems = ({ data }) => {
  const { id, slug, category, title, longText, createdAt } = data.node

  return (
    <div>
      <p>{id}</p>
      <p>{slug}</p>
      <p>{category}</p>
      <p>{title}</p>
      <p>{longText.longText}</p>
      <p>{createdAt}</p>
    </div>
  )
}
