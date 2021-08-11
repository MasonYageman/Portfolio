const Resume = props => {

      return (
  
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Store Upward</h4>
                  <p className="resume-block__header-meta">
                    <span>Software Engineer Intern</span> 
                    <span className="resume-block__header-date">
                      May 2021 - Aug 2021
                    </span>
                  </p>
                </div>
                <p>
                Designed and created a web application that would search for available products across many vendors to host on
                one centralized site.<br/>
                <i>React.js, Python, TensorFlow, PostgreSQL, and KOA web-framework.</i>
                </p>
              </div> {/* end resume-block */}
              <hr/>
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Our Daily Bread Ministries</h4>
                  <p className="resume-block__header-meta">
                    <span>Web Developer/Dev Ops Intern</span> 
                    <span className="resume-block__header-date">
                      February 2021 - May 2021
                    </span>
                  </p>
                </div>
                <p>
                Working with the Dev Ops team and Front-end teams, developed a cached Serverless API,
                made a React.js components which stored cookies, and improved the appearance 
                and functionality of the company's site <a href="https://www.odb.org" target="_blank">www.odb.org.</a>
                <br/>
                <i>React.js, Serverless, AWS, Cypress, Node, Git</i>
                </p>
              </div> {/* end resume-block */}
            </div>
          </div> {/* s-resume__section */}

          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Wayne State University</h4>
                  <p className="resume-block__header-meta">
                    <span>B.S. in Computer Science</span> 
                    <span className="resume-block__header-date">
                      August 2021
                    </span>
                  </p>
                </div>
                <p>
                Mason graduated with honors from Wayne State University.
                 He earned a Bachelor’s Degree in Computer Science while maintaining a 3.9 GPA and a spot on
                  the Dean’s list from the semester he started, through his final semester there.
                </p>
              </div> {/* end resume-block */}
            </div>
          </div> {/* s-resume__section */}
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                  Mason worked with teams that handled the Front-end, Middle-ware, and Back-end services while at Our Daily Bread Ministries
                  as well as being the Software lead on his project at Store Upward. The following shows his exposure to and experience with the technologies used during these times.
                </p>
                <ul className="skill-bars-fat">
                  
                  <li>
                    <div className="progress percent75" />
                    <strong>React.js</strong>
                  </li>
                  <li>
                    <div className="progress percent75" />
                    <strong>Angular.js</strong>
                  </li>
                  <li>
                    <div className="progress percent85" />
                    <strong>Javascript</strong>
                  </li>
                  <li>
                    <div className="progress percent85" />
                    <strong>HTML & CSS</strong>
                  </li>
                  <li>
                    <div className="progress percent65" />
                    <strong>Python</strong>
                  </li>
                  <li>
                    <div className="progress percent90" />
                    <strong>Git</strong>
                  </li>
                  <li>
                    <div className="progress percent65" />
                    <strong>SQL</strong>
                  </li>
                  <li>
                    <div className="progress percent75" />
                    <strong>NoSQL</strong>
                  </li>
                  <li>
                    <div className="progress percent70" />
                    <strong>APIs</strong>
                  </li>
                </ul>
              </div> {/* end resume-block */}
            </div>
          </div> {/* s-resume__section */}
        </section>
      );
    }
    export default Resume;