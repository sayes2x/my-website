import React from "react"
import { graphql, Link } from 'gatsby'

import education from '../../img/education.svg'

import Layout from '../../components/layout'
import Head from '../../components/head'
import EducationSummaryDetail from '../../components/educationSummaryDetail'

import style from './education.module.css'

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
      <main className={style.main}>
      <div className={style.education}>
            <img src={education} alt="my portfolio" className={style.educationImage}/>
          </div>
          <Link to='/resume/experience' className={style.experience}><p>Go to Experience</p></Link>
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
      </main>
    </Layout>
  )
}

export default Education