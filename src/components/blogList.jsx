import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BlogItems } from "./blogItems"

export const BlogList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPosts(sort: { order: DESC }, limit: 3) {
        edges {
          node {
            id
            slug
            category
            title
            longText {
              longText
            }
            createdAt
          }
        }
      }
    }
  `)

  const blogItems = data.allContentfulBlogPosts.edges.map(item => (
    <BlogItems data={item} key={item.node.id} />
  ))

  return <div>{blogItems}</div>
}
