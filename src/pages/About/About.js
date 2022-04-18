import React, { Component } from 'react'
import './css/style.css'
export default class About extends Component {
  render() {
    return (
      <div>
        {/* HEADER */}
        <header className="header">
          <div className="container">
            <a className="logo" title="Mastery" href="#">
              <i className="fa fa-edit" />
              Mastery
            </a>
            <nav className="navbar">
              <a href="#" title="Home">Home</a>
              <a href="#" title="About">About</a>
              <a href="#" title="Services">Services</a>
              <a href="#" title="Contact">Contact</a>
            </nav>
          </div>
        </header>
        {/* CAROUSEL */}
        <section className="carousel" />
        {/* INTRO */}
        <section className="intro">
          <main className="intro-main">
            <div className="container">
              <div className="intro-left intro-float">
                <h1>Welcome To Our Campus</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                  velit adipisci dolore facilis, consectetur, impedit eligendi iusto
                  excepturi assumenda accusantium quam eaque inventore! Placeat ex
                  totam assumenda. Omnis, nemo autem! Omnis, nemo autem!
                </p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur natus nemo incidunt sunt. Corporis, consectetur
                  Corporis, consectetur
                </span>
                <a href="#">Read More</a>
              </div>
              <div className="intro-right intro-float">
                <img src="./img/g1.jpg" alt="g1" />
              </div>
              <div className="clear" />
            </div>
          </main>
        </section>
        {/* STATISTIC */}
        <section className="statistic">
          <main className="statistic-main">
            <div className="container">
              <div className="list">
                <div className="item">
                  <div className="content">
                    <h1>60</h1>
                    <p>
                      PROFESSIONAL <br />
                      INSTRUCTORS
                    </p>
                    <div className="clear" />
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h1>18</h1>
                    <p>
                      NEW COURSES <br />
                      EVERY YEAR
                    </p>
                    <div className="clear" />
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h1>34</h1>
                    <p>
                      LIVE SESSIONS <br />
                      EVERY MONTH
                    </p>
                    <div className="clear" />
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h1>20</h1>
                    <p>
                      REGISTERED <br />
                      STUDENTS
                    </p>
                    <div className="clear" />
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </main>
        </section>
        {/* PRODUCT */}
        <section className="product">
          <main className="product-main">
            <div className="container">
              <div className="list">
                <div className="item">
                  <div className="content" title="Socioligy">
                    <a href="#"><i className="fa fa-male" /> <br />
                      Socioligy</a>
                  </div>
                </div>
                <div className="item" title="Business">
                  <div className="content">
                    <a href="#"><i className="fa fa-suitcase" /> <br />
                      Business</a>
                  </div>
                </div>
                <div className="item" title="Web Dev">
                  <div className="content">
                    <a href="#"><i className="fa fa-male" /> <br />
                      Web Dev</a>
                  </div>
                </div>
                <div className="item" title="Science">
                  <div className="content">
                    <a href="#"><i className="fa fa-flask" /> <br />
                      Science</a>
                  </div>
                </div>
                <div className="item" title="Economics">
                  <div className="content">
                    <a href="#"><i className="fa fa-male" /> <br />
                      Economics</a>
                  </div>
                </div>
                <div className="item" title="Biology">
                  <div className="content">
                    <a href="#"><i className="fa fa-male" /><br />
                      Biology</a>
                  </div>
                </div>
                <div className="item" title="Computing">
                  <div className="content">
                    <a href="#"><i className="fa fa-desktop" /> <br />
                      Computing</a>
                  </div>
                </div>
                <div className="item" title="Web Design">
                  <div className="content">
                    <a href="#"><i className="fa fa-mouse-pointer" /> <br />
                      Web Design</a>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </main>
        </section>
        {/* EVENT */}
        <section className="event">
          <main className="event-main">
            <div className="container">
              <div className="event-left">
                <h1>Latest Posts</h1>
                <div className="list">
                  <div className="item">
                    <div className="content">
                      <div className="img-lastest">
                        <img src="./img/g9.jpg" alt="g9" />
                      </div>
                      <div className="info-lastest">
                        <h1>Summer Course Starts</h1>
                        <span>April 25, 2020</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dolores nobis repellat
                        </p>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                  <div className="item border">
                    <div className="content">
                      <div className="img-lastest">
                        <img src="./img/g10.jpg" alt="g10" />
                      </div>
                      <div className="info-lastest">
                        <h1>About Artificial Intelligence</h1>
                        <span>March 25, 2020</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dolores nobis repellat
                        </p>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="content">
                      <div className="img-lastest">
                        <img src="./img/g8.jpg" alt="g8" />
                      </div>
                      <div className="info-lastest">
                        <h1>New Exam Schedules</h1>
                        <span>February 25, 2020</span>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Dolores nobis repellat
                        </p>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                  <div className="clear" />
                </div>
                <div className="viewall viewall-left">
                  <a href="#">View All</a>
                </div>
              </div>
              <div className="event-right">
                <h1>Upcoming Events</h1>
                <div className="list">
                  <div className="item">
                    <div className="calendar-upcoming">
                      <h1>20</h1>
                      <p>Nov</p>
                      <span>2020</span>
                    </div>
                    <div className="info-upcoming">
                      <h1>Luctus et ultrices posuere</h1>
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curare; Nulla mollis dapibus nunc,
                        ut rhoncus turpis sodales quis. Interger sit amet mattis
                        quam.
                      </p>
                      <span>07:00 - 10:00</span>
                      <pre>Melbourne, Australia</pre>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                <div className="list">
                  <div className="item">
                    <div className="calendar-upcoming">
                      <h1>25</h1>
                      <p>Nov</p>
                      <span>2020</span>
                    </div>
                    <div className="info-upcoming">
                      <h1>Nulla mollis dapibus nunc, ut</h1>
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curare; Nulla mollis dapibus nunc,
                        ut rhoncus turpis sodales quis. Interger sit amet mattis
                        quam.
                      </p>
                      <span>07:00 - 10:00</span>
                      <pre>Melbourne, Australia</pre>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
                <div className="viewall viewall-right">
                  <a href="#">View All</a>
                </div>
              </div>
              <div className="clear" />
            </div>
          </main>
        </section>
        {/* FOOTER */}
        <footer className="footer">
          <main className="footer-main">
            <div className="footer-top">
              <div className="container">
                <div className="float-footer contact">
                  <h1>Contact Us</h1>
                  <div className="info-contact">
                    <a title="Map" href="https://www.google.com/maps/place/112+Cao+Th%E1%BA%AFng,+Ph%C6%B0%E1%BB%9Dng+4,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7722207,106.6776546,707m/data=!3m2!1e3!4b1!4m5!3m4!1s0x31752f211a20768b:0xb9bb32aa11cf2d62!8m2!3d10.7722154!4d106.6798433" target="_blank"><i className="fa fa-map-marker-alt" />Estate Business, #32841
                      block, #221DRS Real estate business building, UK.</a>
                    <a title="Phone" href="tel:212559998888" target="_blank"><i className="fa fa-phone" />+(21)-255-999-8888</a>
                    <a title="Email" href="mailto:corporate-mail@suport.com" target="_blank"><i className="fa fa-envelope-open" />corporate-mail@suport.com</a>
                  </div>
                </div>
                <div className="float-footer featured">
                  <h1>Featured Links</h1>
                  <ul>
                    <li><a title="Graduation" href="#">Graduation</a></li>
                    <li><a title="Admissions" href="#">Admissions</a></li>
                    <li><a title="Book Store" href="#">Book Store</a></li>
                    <li><a title="International" href="#">International</a></li>
                    <li><a title="Courses" href="#">Courses</a></li>
                  </ul>
                </div>
                <div className="float-footer quicklink">
                  <h1>Quick Links</h1>
                  <ul>
                    <li><a title="Home" href="#">Home</a></li>
                    <li><a title="About" href="#">About</a></li>
                    <li><a title="Services" href="#">Services</a></li>
                    <li><a title="Blog" href="#">Blog</a></li>
                    <li><a title="Contact" href="#">Contact</a></li>
                  </ul>
                </div>
                <div className="clear" />
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <p>© 2020 Mastery. All rights reserved | Designed by W3layouts</p>
              </div>
            </div>
          </main>
        </footer>
      </div>

    )
  }
}
