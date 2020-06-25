import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import style from './experienceSummaryDetail.module.css'

const ExperienceSummaryDetail = ({ logoUrl, logoTitle, company, location, title, dates, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <section onClick={() => setDisplaySummary(!displaySummary)} className={style.section}>
      <img src={logoUrl} alt={logoTitle} className={style.experienceImage} />
      <div className={style.heading}>
        <h2>{company}</h2>
        <h3>{location}</h3>
      </div>
      <div className={style.detail}>
        <p>Job Title: {title}</p>
        <p>{dates}</p>
        {displaySummary ?
          <div>
            {documentToReactComponents(summary)}
            <p className={style.click}><em>Click for more information</em></p>
          </div>
        :
          <div>
            {documentToReactComponents(detail)}
          </div>
        }
      </div>
    </section>
  )
}

export default ExperienceSummaryDetail