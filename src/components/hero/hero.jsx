const Hero = (props)=>{


      return (
  
        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>I'm Mason Yageman.</h1>
                <h3>
                  I'm a Detroit based <span>Front End Developer</span>, implementing awesome and
                  effective ideas for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about"> start scrolling </a>
                  and learn more <a className="smoothscroll" href="#about">about me</a>.
                </h3>
                <div className="s-hero__content-social">
                  <a><i className="fab fa-dribbble" />Socials:</a>
                  <a href="https://github.com/MasonYageman"target="_blank"><i className="fab fa-behance"  />GitHub</a>
                  <a href="https://www.linkedin.com/in/mason-yageman-802402194/"target="_blank"><i className="fab fa-linkedin" />Linkedin</a>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div> {/* s-hero__content */}
          <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
              <span className="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </a>
          </div> {/* s-hero__scroll */}
        </section>
      );
    }
export default Hero;