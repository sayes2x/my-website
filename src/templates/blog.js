import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import style from './blog.module.css'

export const query = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      title
      date: publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data: { post } }) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log('node: ', node.data.target.fields)
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={post.title} />
      <div className={style.post}>
      <h1 className={style.title}>{post.title}</h1>
      <p className={style.date}>{post.date}</p>
      <article className={style.article}>
      {documentToReactComponents(
        post.body.json,
        options
      )}
      </article>
      </div>
    </Layout>
  )
}

export default Blog
