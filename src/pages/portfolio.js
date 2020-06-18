import React from "react"
import { graphql } from 'gatsby'

import myPortfolio from '../img/my-portfolio.svg'

import Layout from '../components/layout'
import Head from '../components/head'
import EducationSummaryDetail from '../components/portfolioSummaryDetail'

import style from './portfolio.module.css'

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
      <main className={style.main}>
        <div className={style.portfolio}>
          <img src={myPortfolio} alt="my portfolio" className={style.portfolioImage}/>
        </div>
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
      </main>
    </Layout>
  )
}

export default Portfolio