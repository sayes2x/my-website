import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PortfolioSummaryDetail = ({ screenShotUrl, screenShotTitle, projectName, link, repository, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <div onClick={() => setDisplaySummary(!displaySummary)}>
      <img src={screenShotUrl} alt={screenShotTitle} />
      <h2>{projectName}</h2>
      <h3>{link}</h3>
      {displaySummary ? 
        documentToReactComponents(summary)
      :
        <div>
        <p>{repository}</p>
        {documentToReactComponents(detail)}
        </div>
      }
    </div>
  )
}

export default PortfolioSummaryDetail