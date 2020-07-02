import React from "react"
import { Link } from 'gatsby'

import portfolio from '../img/my-portfolio.svg'
import resume from '../img/resume.svg'
import webTechnologies from '../img/web-technologies.svg'
import blog from '../img/blog.svg'
import hireMe from '../img/hire-me.svg'

import Layout from '../components/layout'
import Head from '../components/head'

import style from './index.module.css'

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main className={style.main}>
        <div className={style.greeting}>
          <h3>I'm a front-end developer living in the greater Detroit area.</h3>
        </div>
        <Link to='/portfolio' className={style.portfolio}>
          <img src={portfolio} alt="my portfolio" className={style.portfolioImage} />
          <p>To see examples of my work, please take a look at my <span className={style.links}>portfolio</span>.</p>
        </Link>
        <Link to='/resume' className={style.resume}>
          <p>For information about my eduction and experience, see my <span className={style.links}>resume</span>.</p>
          <img src={resume} alt="my resume" className={style.resumeImage} />
        </Link>
        <div className={style.picture}></div>
        <Link to='/about' className={style.technologies}>
          <img src={webTechnologies} alt="web technologies" className={style.technologiesImage} />
          <p>If you would like to see the web technologies I am using, go to my <span className={style.links}>about</span> page.</p>
        </Link>
        <Link to='/blog' className={style.blog}>
          <p>I occasionally <span className={style.links}>blog</span> about what I am learning or other subjects of interest to me.</p>
          <img src={blog} alt="my blog" className={style.blogImage} />
        </Link>
        <Link to="/contact" className={style.contact}>
          <h3 className={style.contactSpacing}>Need a developer? <span className={style.links}>Contact me</span>.</h3>
          <p className={style.contactSpacing}>I am interested in working for companies in the Greater Detroit area, or remotely for companies anywhere in the world.</p>
          <div className={style.freelanceContainer}>
            <img src={hireMe} alt="work with me" className={style.contactImage} />
            <div>
            <p className={style.contactSpacing}>I am also interested in freelance projects:</p>
            <ul className={style.list}>
              <li className={style.listItem}><span className={style.listText}>Does your business or organization need a website?</span></li>
              <li className={style.listItem}><span className={style.listText}>Do you need help building your personal presence on the web?</span></li>
              <li className={style.listItem}><span className={style.listText}>Can I do some consulting for your company or organization?</span></li>
            </ul>
            </div>
          </div>
        </Link>
      </main>
    </Layout>
  )
}

export default Home