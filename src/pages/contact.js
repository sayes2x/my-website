import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const Contact = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title='Contact' />
      <h1>Contact</h1>
      <p>
        Email:{" "}
        <a
          href={`mailto:${site.siteMetadata.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.siteMetadata.email}
        </a>
      </p>
      <p>
        Twitter:{" "}
        <a
          href="https://www.twitter.com/sayes2x"
          target="_blank"
          rel="noopener noreferrer"
        >
          @sayes2x
        </a>
      </p>
      <p>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/scottalanprice"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/scottalanprice
        </a>
      </p>
    </Layout>
  )
}

export default Contact