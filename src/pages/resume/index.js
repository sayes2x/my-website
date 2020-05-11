import React from "react"

import Layout from '../../components/layout'
import Head from '../../components/head'
import ResumeHeader from '../../components/resumeHeader'

const Resume = () => {
  return (
    <Layout>
      <Head title="Resume" />
      <ResumeHeader />
      <h1>I am seeking work as a front-end developer.</h1>
    </Layout>
  )
}

export default Resume