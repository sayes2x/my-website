import React from "react"

import Layout from '../../components/layout'
import Head from '../../components/head'
import ResumeHeader from '../../components/resumeHeader'
import ExperineceSummaryDetail from '../../components/experienceSummaryDetail'

import style from '../blog.module.css'

export const query = graphql`
  {
    companies: allContentfulExperience (
      sort: {
        fields: order,
        order: DESC
      }
    ) {
      nodes {
        company
        location
        jobTitle
        date
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

const Experience = ({ data: { companies } }) => {
  return (
    <Layout>
      <Head title="Resume - Experience" />
      <ResumeHeader />
      <h1>Experience</h1>
      <ol className={style.posts}>
        {companies.nodes.map(company => {
          return (
            <li key={`education-${company.company}`} className={style.post}>
                <ExperineceSummaryDetail
                  logoUrl={company.logo.file.url}
                  logoTitle={company.logo.title}
                  company={company.company}
                  location={company.location}
                  title={company.jopTitle}
                  dates={company.date}
                  summary={company.summary.json}
                  detail={company.detail.json} />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Experience