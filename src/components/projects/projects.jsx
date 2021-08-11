const Projects = props =>{
    return (
  
        <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
              <h3 className="section-header-allcaps">Projects</h3>
            </div>
            <div className="column large-9 tab-12">
              <div className="resume-block">
                <div className="resume-block__header">
                  <h4 className="h3">Line Up Task Manager</h4>
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
                  <h4 className="h3">Covid-19 Statistic Web App</h4>
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
      );
    }
  export default Projects;