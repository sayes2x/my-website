import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const EducationSummaryDetail = ({ logoUrl, logoTitle, school, degree, major, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <div onClick={() => setDisplaySummary(!displaySummary)}>
      <img src={logoUrl} alt={logoTitle} />
      <h2>{school}</h2>
      <h3>{degree}</h3>
      {displaySummary ? 
        documentToReactComponents(summary)
      :
        <div>
        <p>{major}</p>
        {documentToReactComponents(detail)}
        </div>
      }
    </div>
  )
}

export default EducationSummaryDetail