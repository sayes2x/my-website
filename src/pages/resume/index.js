import React from "react"
import { Link } from 'gatsby'

import resume from '../../img/resume.svg'
import experience from '../../img/experience.svg'
import education from '../../img/education.svg'

import Layout from '../../components/layout'
import Head from '../../components/head'

import style from './index.module.css'

const Resume = () => {
  return (
    <Layout>
      <Head title='Resume' />
      <main class={style.main}>
        <div className={style.resume}>
          <img src={resume} alt="my portfolio" className={style.resumeImage}/>
        </div>
        <Link className={style.experience} to='/resume/experience'>
          <img src={experience} alt='experience' className={style.experienceImage} />
          <h3 className={style.experienceLabel}>Experience</h3>
        </Link>
        <Link className={style.education} to='/resume/education'>
          <img src={education} alt='education' className={style.educationImage} />
          <h3 className={style.educationLabel}>Education</h3>
        </Link>
        <p className={style.purpose}>I believe that the purpose of work is to make the world a better place. We live in a world with many problems to be solved. I desire to perform work that takes what is inefficient and makes it effective and productive. My experience and skills, along with my personal values and eagerness to learn make me an ideal candidate for your business. If you have  good and meaningful work I can do for you or for your organization please <Link to='/contact' className={style.contact}>contact me</Link>.</p>
      </main>
    </Layout>
  )
}

export default Resume