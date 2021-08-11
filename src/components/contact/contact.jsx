const Contact = props =>{
      return (
  
        <section id="contact" className="s-contact target-section">
          <div className="row s-contact__header">
            <div className="column large-12">
              <h3 className="section-header-allcaps">Say Hello</h3>
            </div>
          </div>
          <div className="row s-contact__content">
            <div className="column large-7 medium-12">
              <h4 className="huge-text">
                
                Have a great idea? Let’s bring it to life.
                :)
              </h4>
            </div>
            <div className="column large-4 medium-12">
              <div className="row contact-infos">
                <div className="column large-12 medium-6 tab-12">
                  <div className="contact-block">
                    <h5 className="contact-block__header">
                      Email
                    </h5>
                    <p className="contact-block__content">
                      <a className="mailtoui" href="mailto:masonyageman@gmail.com">masonyageman@gmail.com</a>
                    </p>
                  </div> {/* end contact-block */}
                </div>
                <div className="column large-12 medium-6 tab-12">
                  <div className="contact-block">
                    <h5 className="contact-block__header">
                      Phone
                    </h5>
                    <p className="contact-block__content">
                      <a href="tel:+7346641033">734 664-1033</a>
                    </p>
                  </div> {/* end contact-block */}
                </div>
                <div className="column large-12">
                  <a href="mailto:masonyageman@gmail.com" className="mailtoui btn btn--primary h-full-width">Let's Talk</a>
                </div>
              </div> {/* end contact-infos */}
            </div>
          </div> {/* s-contact__content */}
        </section>
      );
    }
export default Contact;