import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import style from './portfolioSummaryDetail.module.css'

const PortfolioSummaryDetail = ({ screenShotUrl, screenShotTitle, projectName, link, repository, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <section onClick={() => setDisplaySummary(!displaySummary)} className={style.section}>
      <h3 className={style.projectName}>{projectName}</h3>
      <img src={screenShotUrl} alt={screenShotTitle} className={style.projectImage}/>
      {displaySummary ?
        <div>
          {documentToReactComponents(summary)}
          <p className={style.click}><em>Click for more information</em></p>
        </div>
        :
        <div>
          {documentToReactComponents(detail)}
          <div className={style.links}>
            <p><a href={link} target="_blank" rel="noopener noreferrer">Go to {projectName}</a></p>
            <p><a href={repository} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
          </div>
        </div>
      }
    </section>
  )
}

export default PortfolioSummaryDetail