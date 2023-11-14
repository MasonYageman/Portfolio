const Header = (props) =>{
      return (
  
        <section id="about" className="s-about target-section">
          <div className="row">
            <div className="column large-3 tab-12">
              <img className="s-about__pic" src="images/avatars/MasonYageman.jpg" alt="" />
            </div>
            <div className="column large-9 tab-12 s-about__content">
              <h3>About Me</h3>
              <p>
              My name is Mason Yageman, I am a Software Engineer with ~3 years of experience working with various 
              frontend frameworks, Multpile API frameworks, and developing with AWS. During my time working as a
              Software Engineer for Our Daily Bread Ministries and as a Software Lead on the project I was assigned while working at Store Upward, I had many opportunities 
              to collaborate with teams that had various backgrounds and cultures. Through collaboration with these teams, we were able to design, scope, 
              and implement exciting initiatives to meet a wide range of goals that targeted varius regions of the world. When I am away from my keyboard, you can usually find me 
              playing volleyball, enjoying the outdoors, or spending quality time with friends.<br/> Keep scrolling to learn more!
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

                <a href="resumeNov2023.pdf" download="Mason_Yageman_Resume" target="_blank" className="btn btn--download">
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