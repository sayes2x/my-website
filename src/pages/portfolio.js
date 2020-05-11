import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'
import EducationSummaryDetail from '../components/portfolioSummaryDetail'

import style from './blog.module.css'

export const query = graphql`
  {
    portfolio: allContentfulPortfolio (
      sort: {
        fields: order,
        order: ASC
      }
    ) {
      nodes {
        projectName
        link
        repository
        screenShot {
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

const Portfolio = ({ data: { portfolio } }) => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio</h1>
      <ol className={style.posts}>
        {portfolio.nodes.map(project => {
          return (
            <li key={`education-${project.projectName}`} className={style.post}>
                <EducationSummaryDetail
                  screenShotUrl={project.screenShot.file.url}
                  screenShotTitle={project.screenShot.title}
                  projectName={project.projectName}
                  link={project.link}
                  repository={project.repository}
                  summary={project.summary.json}
                  detail={project.detail.json} />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Portfolio