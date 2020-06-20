import React from "react"
import { Link } from "gatsby"
import { BlogList } from "../components/blogList"

import Layout from "../components/layout"
import Form from "../components/form"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/blog/">Go to blog pages</Link> <br />
      <Form />
      <BlogList />
    </Layout>
  )
}

export default IndexPage
