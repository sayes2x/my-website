import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import style from "./footer.module.css"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)

  const year = new Date().getFullYear()
  return (
    <footer className={style.footer}>
      <p>
        Created by <span className={style.name}>{site.siteMetadata.name}</span> - © {year}
      </p>
    </footer>
  )
}

export default Footer