const Header = (props) =>{
      return (
  
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img className="s-about__pic" src="images/avatars/user-06.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p>
              Mason Yageman is a Front-end Web Developer passionate about turning big ideas into reality. As a graduate of Wayne State University,
               he has worked on several teams to develop innovative web and database projects. Outside of school, Mason has worked with multiple companies such as, 
               Store Upward and Our Daily Bread Ministries, as a Software Engineer. During his time at these companies he was able to collaborate with various teams to 
               design, plan, and implement new conceptions. Mason worked closesly with Front-End technologies such as React, HTML & CSS, as well as multiple Service Layer and Back-End 
               technologies, Serverless, AWS, Node.JS, KOA, etc. When Mason finds himself away from his keyboard, he is usually spending his time playing volleyball, 
               enjoying the outdoors, or enjoying time with friends. Keep scrolling to learn more!
              </p>
              <hr />
              <div className="row s-about__content-bottom">
                <div className="column w-1000-stack">
                  <h3>Contact Details</h3>
                  <p>
                    Mason Yageman <br />
                    Westland, MI 48186 <br />
                    <a href="tel:+7346641033">734 664-1033</a> <br />
                    <a href="mailto:masonyageman@gmail.com">masonyageman@gmail.com</a>
                  </p>
                </div>
                <div className="column w-1000-stack">

                <a href="../src/components/about/Mason_Yageman_Resume_August.pdf" download="Mason_Yageman_Resume" target="_blank" className="btn btn--download">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div> {/* end row */}
        </section>
      );
    }
export default Header;