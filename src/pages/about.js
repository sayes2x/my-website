import React from "react"

import webTechnologies from '../img/web-technologies.svg'
import usedProfessionally from '../img/technologies-used-professionally.svg'
import studied from '../img/technologies-studied.svg'
import usedProjects from '../img/technologies-used-in-projects.svg'

import Layout from '../components/layout'
import Head from "../components/head"

import style from './about.module.css'

const About = () => {
  return (
    <Layout>
      <Head title='About' />
      <main className={style.main}>
        <div className={style.me}>
          <h3 className={style.spacing}>About Me</h3>
          <p className={style.spacing}>I am a creative front-end developer with over fifteen years of IT experience, including 3 years of development experience – 2 years studying and working on personal projects and 1 year of experience as a part-time developer. I use JavaScript, HTML5, and CSS3 to build websites that are responsive, accessible and beautiful. I specializes in ReactJS and am looking for a junior front-end or full-stack developer position.</p>
        </div>
        <div className={style.webTechnologies}>
          <img src={webTechnologies} alt="web technologies" className={style.webTechnologiesImage}/>
          <h3 className={style.spacing}>Tools & Technologies</h3>
        </div>
        <div className={style.usedProfessionally}>
          <img src={usedProfessionally} alt="technologies used professionally" className={style.usedProfessionallyImage}/>
          <div className={style.usedProfessionallyList}>
            <h4 className={style.spacing}>Used Professionally</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <a href="https://html.spec.whatwg.org/multipage/"
                  target="_blank"
                  rel="noopener noreferrer">
                    HTML5
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.w3.org/Style/CSS/"
                  target="_blank"
                  rel="noopener noreferrer">
                    CSS3
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.ecma-international.org/ecma-262/10.0/index.html#Title"
                  target="_blank"
                  rel="noopener noreferrer">
                    JavaScript
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://getbootstrap.com"
                  target="_blank"
                  rel="noopener noreferrer">
                    Bootstrap
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.cisecurity.org/controls/cis-controls-list/"
                  target="_blank"
                  rel="noopener noreferrer">
                    Information Security
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration"
                  target="_blank"
                  rel="noopener noreferrer">
                    SharePoint
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://docs.microsoft.com/en-us/previous-versions/t0aew7h6(v=vs.85)"
                  target="_blank"
                  rel="noopener noreferrer">
                    VBScript
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.office.com"
                  target="_blank"
                  rel="noopener noreferrer">
                    Microsoft Office
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.usedProjects}>
          <img src={usedProjects} alt="technologies used in projects" className={style.usedProjectsImage}/>
          <div className={style.usedProjectsMore}>
              <h4 className={style.spacing}>Used in Projects</h4>
                <h5 className={style.italic}>Used Frequently</h5>
                <ul className={style.list}>
                  <li className={style.listItem}>
                    <a href="https://html.spec.whatwg.org/multipage/"
                      target="_blank"
                      rel="noopener noreferrer">
                        HTML5
                    </a>
                  </li>
                  <li className={style.listItem}>
                    <a href="https://www.w3.org/Style/CSS/"
                      target="_blank"
                      rel="noopener noreferrer">
                        CSS3
                    </a>
                  </li>
                  <li className={style.listItem}>
                    <a href="https://www.ecma-international.org/ecma-262/10.0/index.html#Title"
                      target="_blank"
                      rel="noopener noreferrer">
                        JavaScript
                    </a>
                  </li>
                  <li className={style.listItem}>
                    <a href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer">
                        React.js
                    </a>
                  </li>
                  <li className={style.listItem}>
                    <a href="https://www.npmjs.com"
                      target="_blank"
                      rel="noopener noreferrer">
                        npm
                    </a>
                  </li>
                </ul>
          </div>
            <div className={style.usedProjectsLess}>
              <h5 className={style.italic}>Used Less Frequently</h5>
              <ul className={style.list}>
                <li className={style.listItem}>
                  <a href="https://graphql.org"
                    target="_blank"
                    rel="noopener noreferrer">
                      GraphQL
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://vuejs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                      Vue.js
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://getbootstrap.com"
                    target="_blank"
                    rel="noopener noreferrer">
                      Bootstrap
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://jquery.com"
                    target="_blank"
                    rel="noopener noreferrer">
                      jQuery
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://www.json.org/json-en.html"
                    target="_blank"
                    rel="noopener noreferrer">
                      JSON
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://git-scm.com"
                    target="_blank"
                    rel="noopener noreferrer">
                      Git
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer">
                      GitHub
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="http://trafodion.apache.org/docs/sql_reference/index.html"
                    target="_blank"
                    rel="noopener noreferrer">
                      SQL
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://developers.google.com/web/tools/chrome-devtools"
                    target="_blank"
                    rel="noopener noreferrer">
                      Chrome DevTools
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
                    target="_blank"
                    rel="noopener noreferrer">
                      Regular Expressions
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://www.linux.org"
                    target="_blank"
                    rel="noopener noreferrer">
                      Linux
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://jestjs.io/docs/en/expect.html"
                    target="_blank"
                    rel="noopener noreferrer">
                      Expect.js
                  </a>
                </li>
                <li className={style.listItem}>
                  <a href="https://emotion.sh/docs/introduction"
                    target="_blank"
                    rel="noopener noreferrer">
                      Emotion
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div className={style.studied}>
          <img src={studied} alt="technologies studied" className={style.studiedImage}/>
          <div className={style.studiedList}>
            <h4 className={style.spacing}>Used in Tutorials</h4>
            <ul className={style.list}>
              <li className={style.listItem}>
                <a href="https://nodejs.org/en/docs/"
                  target="_blank"
                  rel="noopener noreferrer">
                    Node.js
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.php.net"
                  target="_blank"
                  rel="noopener noreferrer">
                    PHP
                </a>
              </li>
              <li className={style.listItem}>
                <a href="https://www.mongodb.com"
                  target="_blank"
                  rel="noopener noreferrer">
                    MongoDB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default About
