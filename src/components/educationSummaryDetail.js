import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import style from './educationSummaryDetail.module.css'

const EducationSummaryDetail = ({ logoUrl, logoTitle, school, degree, major, summary, detail }) => {
  const [displaySummary, setDisplaySummary] = useState(true)
  return (
    <section onClick={() => setDisplaySummary(!displaySummary)} className={style.section}>
      <img src={logoUrl} alt={logoTitle} className={style.educationImage} />
      <div className={style.heading}>
        <h2>{school}</h2>
        <h3>{degree}</h3>
      </div>
      <div className={style.detail}>
        {displaySummary ? 
          <div>
            {documentToReactComponents(summary)}
            <p className={style.click}><em>Click for more information</em></p>
          </div>
        :
          <div>
            <p>{major}</p>
            {documentToReactComponents(detail)}
          </div>
        }
      </div>
    </section>
  )
}

export default EducationSummaryDetail