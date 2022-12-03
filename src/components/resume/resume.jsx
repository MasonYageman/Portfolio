const Resume = props => {

      return (
        <>
        <section id="resume" className="s-resume target-section">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <div className="resume-block__header">
                <img src="/images/ODBM-Mark_RGB.png" height="100" width="100" alt=""/>
                <h4 className="h3"><a href="https://odb.org" target="_blank" rel="noreferrer"> Our Daily Bread Ministries </a></h4> 
                  <p className="resume-block__header-meta">
                    <span> Software Engineer</span> 
                    <span className="resume-block__header-date">
                      September 2021 - Present
                    </span>
                    <br/>
                    <p style={{fontSize:'18px'}}>
                <i>React.js, Next.js, Redux, AWS, Serverless, REST APIs, WordPress, TypeScript, JavaScript, Python, NoSQL/SQL, Node, Git</i>
                </p>
                  </p>
                </div>
                <p>
                Worked on building React and Next.js components for the customer-facing web apps, which improved the user’s average page activity. 
                Designed and implemented RESTful APIs in both Typescript and Python that served data to and from the JavaScript frontend and AWS backend.
                Supported development teams by building, maintaining, and scaling AWS infrastructure to support various applications.
                Collaborated with an agile team to help architect and scope feature requests to ensure that the biggest impact features get prioritized
             
                </p>
              </div> {/* end resume-block */}
              <hr/>
              <div className="resume-block">
                <div className="resume-block__header">
                <img src="/images/StoreUpwardLogo.svg" height="300" width="300" alt=""/>  
                <h4 className="h3"><a href="https://storeupward.com/" target="_blank" rel="noreferrer"> Store Upward</a></h4>
                  <p className="resume-block__header-meta">
                    <span>Software Engineer Intern</span> 
                    <span className="resume-block__header-date" >
                      May 2021 - Aug 2021
                    </span>
                    <br/>
                    <p className="masonPtag">
                    <i>React.js, Python, TensorFlow, PostgreSQL, and KOA web-framework.</i>
                    </p>
                  </p>
                </div>
                <p>
                Built a React web application from the ground up, that centralized products from decentralized vendors for
                a more efficient user experience. Designed and implemented multiple web crawlers to insert over 3M products into a PostgreSQL database backlog. 
                Developed and trained TensorFlow AI models to accurately categorize products.
                Collaborated with an agile team of 3 to architect and implement features to meet both technical and business goals.
                 <br/>

                </p>
              </div> {/* end resume-block */}
              <hr/>
              <div className="resume-block">
                <div className="resume-block__header">
                  <img src="/images/ODBM-Mark_RGB.png" height="100" width="100" alt=""/>
                 <h4 className="h3"> <a href="https://odb.org" target="_blank" rel="noreferrer">Our Daily Bread Ministries</a> </h4> 
                  <p className="resume-block__header-meta">
                    <span> Software Engineer/Dev Ops Intern</span> 
                    <span className="resume-block__header-date">
                      February 2021 - May 2021
                    </span>
                    <p style={{fontSize:'18px'}}>
                    <i>React.js, Typescript, Serverless, AWS, Cypress, Node, Git</i>
                    </p>
                  </p>
                </div>
                <p>
                Implemented solutions that improved the SEO across the site, focusing on the landing page.
                Built a Serverless cached REST API end point that acted as a proxy for YouTube search results.
                Collaborated on designing, scoping, and implementing features on a SAFe Agile scrum team.
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
                <img src="/images/WSLogo.jpeg" height="150" width="150" alt=""/>
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
          </section>
          <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-resume__section">
              <div className="column large-3 tab-12">
                <h3 className="section-header-allcaps">Projects</h3>
              </div>
              <div className="column large-9 tab-12">
                <div className="resume-block">
                  <div className="resume-block__header">
                    <h4 className="h3"><a href='http://lineup.ga' target='_blank' rel="noreferrer">Line Up Task Manager</a></h4>
                    <p className="resume-block__header">
                      <span>Angular, Google Firestore, JavaScript, Node, Git, Mocha   </span> 
                      <span className="resume-block__header-date">
                        August 2020
                      </span>
                    </p>
                  </div>
                  <p>
                  Lead a team of six people to make a dynamic single page Angular application. Line-up used a 
                  CRUD database and relied on using observables and two way databinding to synchronize data between 
                  the client and the Google Firestore database.
                  </p>
                </div> {/* end resume-block */}
                <hr/>
                <div className="resume-block">
                  <div className="resume-block__header">
                    <h4 className="h3"><a href="masonyageman.pythonanywhere.com/covid/covidCases">Covid-19 Statistic Web App</a></h4>
                    <p className="resume-block__header">
                      <span>Python, Django, JSON </span> 
                      <span className="resume-block__header-date">
                        April 2020
                      </span>
                    </p>
                  </div>
                  <p>
                  Django Web Application that uses REST APIs to display an updated 
                  graph showing the confirmed cases of covid-19 in the U.S. compared to Italy.
                  </p>
                </div> {/* end resume-block */}
              </div>
            </div> {/* s-resume__section */}
            </section>
          <section id="resume" className="s-resume ">
          <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Skills</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <p>
                I gained experience in the following technologies through working with teams that handled the Front-end, Middle-ware, and Back-end services. Collaborating with multiple teams during my time as a Software Engineer at Our Daily Bread Ministries
                  as well the time I spent as the Software lead for the project I was assgined at Store Upward, has provided me with valuable experience in these areas.
                </p>
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                  
                  <strong className="btn masonBtn" >React.js</strong>
                  <strong className="btn masonBtn"  >Angular</strong>  
                  <strong className="btn masonBtn"  >Next.js</strong> 
                  <strong className="btn masonBtn" >Javascript</strong>
                  <strong className="btn masonBtn" >TypeScript</strong>
                  <strong className="btn masonBtn" >Python</strong>
                  <strong className="btn masonBtn" >HTML & CSS</strong>       
                  <strong className="btn masonBtn" >REST APIs</strong>
                  <strong className="btn masonBtn" >Serverless</strong>
                  <strong className="btn masonBtn" >Redux</strong>
                  <strong className="btn masonBtn" >AWS</strong>
                  <strong className="btn masonBtn" >Node.js</strong>
                  <strong className="btn masonBtn" >Express</strong>
                  <strong className="btn masonBtn" >KOA</strong>
                  <strong className="btn masonBtn" >Git</strong>      
                  <strong className="btn masonBtn" >SQL</strong>
                  <strong className="btn masonBtn" >NoSQL</strong>
                 

                  
              </div>
              </div> {/* end resume-block */}
            </div>
          </div> {/* s-resume__section */}
          </section>
        </>
        
      );
    }
    export default Resume;