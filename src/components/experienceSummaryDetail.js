import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ExperienceSummaryDetail = ({ logoUrl, logoTitle, company, location, title, dates, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <div onClick={() => setDisplaySummary(!displaySummary)}>
      <img src={logoUrl} alt={logoTitle} />
      <h2>{company}</h2>
      <h3>{location}</h3>
      <p>{title}</p>
      <p>{dates}</p>
      {displaySummary ? 
        documentToReactComponents(summary)
      :
        <div>
        {documentToReactComponents(detail)}
        </div>
      }
    </div>
  )
}

export default ExperienceSummaryDetail