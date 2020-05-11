import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'

const ResumeHeader = () => {
  return (
    <>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/resume/experience'>Experience</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/resume/education'>Education</Link>
          </li>
        </ul>
      </nav>
    </>
    )
}

export default ResumeHeader