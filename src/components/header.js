import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import style from  './header.module.css'

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          jobTitle
        }
      }
    }
  `)
  
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        <Link to="/">
          {site.siteMetadata.name}
        </Link>
      </h1>
      <h2 className={style.title2}>
        {site.siteMetadata.jobTitle}
      </h2>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link
              to="/"
              className={style.navItem}
              activeClassName={style.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
          <Link className={style.navItem} activeClassName={style.activeNavItem} to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link className={style.navItem} activeClassName={style.activeNavItem} to='/resume'>Resume</Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={style.navItem}
              activeClassName={style.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={style.navItem}
              activeClassName={style.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={style.navItem}
              activeClassName={style.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
