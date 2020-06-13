import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import hireMe from '../img/hire-me.svg'
import email from '../img/email.svg'
import github from '../img/github.svg'
import linkedIn from '../img/linked-in.svg'
import twitter from '../img/twitter.svg'

import Layout from '../components/layout'
import Head from "../components/head"

import style from './contact.module.css'

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
      <main className={style.main}>
        <a href={`mailto:${site.siteMetadata.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.email}
        >
          <img src={email} alt="send me an email" className={style.emailImage} />
          <p>email:<br></br> <span className={style.links}>{site.siteMetadata.email}</span></p>
        </a>
        <a href="https://github.com/sayes2x"
          target="_blank"
          rel="noopener noreferrer"
          className={style.github}
        >
          <p>github: <span className={style.links}>sayes2x</span></p>
          <img src={github} alt="github" className={style.githubImage} />
        </a>
        <div className={style.workWithMe}>
        <img src={hireMe} alt="work with me" className={style.workWithMeImage} />
        <h3>Work with Me!</h3>
        </div>
        <a href="https://www.linkedin.com/in/scottalanprice"
          target="_blank"
          rel="noopener noreferrer"
          className={style.linkedin}  
        >
          <img src={linkedIn} alt="linkedin" className={style.linkedinImage}/>
          <p>linkedIn: <span className={style.links}>linkedin.com/in/scottalanprice</span></p>
        </a>
        <a href="https://www.twitter.com/sayes2x"
          target="_blank"
          rel="noopener noreferrer"
          className={style.twitter}  
        >
          <p>twitter: <span className={style.links}>@sayes2x</span></p>
          <img src={twitter} alt="twitter" className={style.twitterImage}/>
        </a>
      </main>
    </Layout>
  )
}

export default Contact