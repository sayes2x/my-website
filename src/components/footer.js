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
    <footer>
      <p className={style.copyright}>
        Created by {site.siteMetadata.name} - © {year}
      </p>
    </footer>
  )
}

export default Footer