import React from "react"
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Head from '../../components/head'
import ResumeHeader from '../../components/resumeHeader'
import EducationSummaryDetail from '../../components/educationSummaryDetail'

import style from '../blog.module.css'

export const query = graphql`
  {
    colleges: allContentfulEducation (
      sort: {
        fields: order,
        order: DESC
      }
    ) {
      nodes {
        school
        degree
        major
        logo {
          title
          file {
            url
          }
        }
        summary {
          json
        }
        detail {
          json
        }
      }
    }
  }
 `

 const Education = ({ data: { colleges } }) => {
  return (
    <Layout>
      <Head title="Resume - Education" />
      <ResumeHeader />
      <h1>Education</h1>
      <ol className={style.posts}>
        {colleges.nodes.map(college => {
          return (
            <li key={`education-${college.degree}`} className={style.post}>
                <EducationSummaryDetail
                  logoUrl={college.logo.file.url}
                  logoTitle={college.logo.title}
                  school={college.school}
                  degree={college.degree}
                  major={college.major}
                  summary={college.summary.json}
                  detail={college.detail.json} />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Education