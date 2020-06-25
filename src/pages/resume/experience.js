import React from "react"
import { graphql, Link } from 'gatsby'

import experience from '../../img/experience.svg'

import Layout from '../../components/layout'
import Head from '../../components/head'
import ExperineceSummaryDetail from '../../components/experienceSummaryDetail'

import style from './experience.module.css'

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
        <main className={style.main}>
          <div className={style.experience}>
            <img src={experience} alt="my portfolio" className={style.experienceImage}/>
          </div>
          <Link to='/resume/education' className={style.education}><p>Go to Education</p></Link>
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
        </main>
    </Layout>
  )
}

export default Experience