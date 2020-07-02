import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import style from "./blog.module.css"
import Head from "../components/head"

import blog from '../img/blog.svg'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  
  return (
    <Layout>
      <Head title='Blog' />
      <div className={style.main}>
        <div className={style.blog}>
            <img src={blog} alt="my portfolio" className={style.blogImage}/>
        </div>
        <ol className={style.posts}>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className={style.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog