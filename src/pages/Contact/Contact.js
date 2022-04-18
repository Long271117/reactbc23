import React, { Component } from 'react'
import './css/style.css'
export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* HEADER */}
        <header className="header" id="header">
          <div className="container">
            <div className="header-left" title="NJOY TRAVELS">
              <a href="#">
                <p>NJOY</p>
                <h1>TRAVELS</h1></a>
            </div>
            <div className="header-right">
              <div className="contact">
                <a href="tel:84 163 4643 124" title="Phone">
                  <i className="fa fa-phone" /> : +84 163 4643 124</a>
                <a href="mailto:Dangtrunghieu147@gmail.com" title="Email">
                  <i className="fa fa-envelope" /> : Dangtrunghieu147@gmail.com
                </a>
              </div>
              <div className="navbar">
                <nav className="navbar-word">
                  <a href="#" title="Home" id="home" className="active">Home</a>
                  <a href="#" title="About" id="about">About</a>
                  <a href="#" title="Pages" id="page">Pages</a>
                  <a href="#" title="Code" id="code">Code</a>
                  <a href="#" title="Galerry" id="galerry">Galerry</a>
                  <a href="#" title="Contact" id="contact">Contact</a>
                </nav>
                <nav className="navbar-icon">
                  <a href="https://www.google.com.vn/" title="Google" target="_blank"><i className="fab fa-google-plus-g" /></a>
                  <a href="https://www.linkedin.com/" title="LinkedIn" target="_blank"><i className="fab fa-linkedin-in" /></a>
                  <a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fab fa-twitter" /></a>
                  <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i className="fab fa-facebook-f" /></a>
                </nav>
              </div>
            </div>
            <div className="clear" />
          </div>
        </header>
        {/* CAROUSEL */}
        <section className="carousel" id="carousel">
          <main className="carousel-main">
            <span>VARIUS</span>
            <h1>Your Holiday!</h1>
            <p>
              Marius in erat justo. Nullam ac urna eu felis dapibus condimentum sit
              amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc. Etiam haretra, erat sed fermentum feugiat,
              velit mauris
            </p>
            <a href="#">More</a><br />
            <i className="fa fa-circle active" />
            <i className="fa fa-circle" />
          </main>
          <div className="go-up">
            <a href="#header" title="Move to Header"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </section>
        {/* INTRO */}
        <section className="intro" id="intro">
          <header className="intro-header">
            <div className="container">
              <h1>WELCOME</h1>
            </div>
          </header>
          <main className="intro-main">
            <div className="container">
              <div className="list">
                <div className="item item-text item-text-top">
                  <div className="content">
                    <h1>Mauris in erat justo.</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat,
                      velit mauris. Sed non neque elit. Sed ut imperdiet nisi. Proin
                      condimentum fermentum nunc. Etiam haretra erat sed fermentum
                      feugiat, velit mauris Proin condimentum fermentum nunc. Etiam
                      haretra, erat seneque elit. Sed ut imperdiet nisi. Proin
                      condimentum fer
                    </p>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat,
                      velit mauris. Sed non neque elit. Sed ut imperdiet nisi. Proin
                      condimentum fermentum nunc. Etiam haretra erat sed fermentum
                      feugiat
                    </p>
                    <a href="#">More</a>
                  </div>
                </div>
                <div className="item item-img">
                  <div className="content">
                    <img src="./img/2.jpg" alt={2} />
                  </div>
                </div>
                <div className="item item-img">
                  <div className="content">
                    <img src="./img/3.jpg" alt={3} />
                  </div>
                </div>
                <div className="item item-text item-text-bottom">
                  <div className="content">
                    <h1>Mauris in erat justo.</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat,
                      velit mauris. Sed non neque elit. Sed ut imperdiet nisi. Proin
                      condimentum fermentum nunc. Etiam haretra erat sed fermentum
                      feugiat, velit mauris Proin condimentum fermentum nunc. Etiam
                      haretra, erat seneque elit. Sed ut imperdiet nisi. Proin
                      condimentum fer
                    </p>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat,
                      velit mauris. Sed non neque elit. Sed ut imperdiet nisi. Proin
                      condimentum fermentum nunc. Etiam haretra erat sed fermentum
                      feugiat
                    </p>
                    <a href="#">More</a>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </main>
          <div className="go-up">
            <a href="#carousel" title="Move to Carousel"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </section>
        {/* SERVICE */}
        <section className="service" id="service">
          <header className="service-header">
            <div className="container">
              <h1>SERVICES</h1>
            </div>
          </header>
          <main className="service-main">
            <div className="container">
              <div className="list">
                <div className="item">
                  <div className="content">
                    <i className="fa fa-anchor" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <i className="fa fa-sms" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <i className="fa fa-heartbeat" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <i className="fab fa-uniregistry" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <i className="fa fa-heartbeat" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <i className="fa fa-thumbs-up" />
                    <h1>Phaseus suspict</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </main>
          <div className="go-up">
            <a href="#intro" title="Move to Intro"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </section>
        {/* NEW */}
        <section className="new" id="new">
          <header className="new-header">
            <div className="container">
              <h1>NEWS</h1>
            </div>
          </header>
          <main className="new-main">
            <div className="container">
              <div className="main-left new-float">
                <img src="./img/4.jpg" alt={4} />
              </div>
              <div className="main-right new-float">
                <div className="admin-time">
                  <a href="#" title="Admin"><i className="fa fa-user" /> Admin</a>
                  <p><i className="fa fa-calendar-alt" /> May, 06, 2016</p>
                </div>
                <h1>The most beautiful <br />beach on over <br />the world</h1>
                <a href="#">More</a>
              </div>
              <div className="clear" />
            </div>
          </main>
          <div className="go-up">
            <a href="#service" title="Move to Services"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </section>
        {/* JOIN */}
        <section className="join" id="join">
          <header className="join-header">
            <h1>JOIN THE CLUB</h1>
          </header>
          <main className="join-main">
            <input className="subcribe" type="text" placeholder="subcribe" />
            <button type="submit"><i className="fa fa-paper-plane" /></button>
          </main>
          <div className="join-line-bottom"><p /></div>
          <div className="go-up">
            <a href="#new" title="Move to News"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="footer">
          <main className="footer-main">
            <div className="container">
              <div className="list">
                <div className="item history">
                  <div className="content">
                    <h1>History of us</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat,
                      velit mauris. Sed
                    </p>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentum nunc. Etiam haretra erat sed fermentum feugiat
                    </p>
                  </div>
                </div>
                <div className="item twitter">
                  <div className="content">
                    <h1>Twitter Posts</h1>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin
                      <a href="http://example.com" target="_blank">http://example.com</a>
                      condimentum fermentum
                    </p>
                    <i className="fab fa-twitter" />
                    <span>02 day ago</span>
                    <p>
                      Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                      fermentuma
                      <a href="http://gmail.com" target="_blank">http://gmail.com</a>
                      nunc. Etiam haretra,
                    </p>
                    <i className="fab fa-twitter" />
                    <span>03 day ago</span>
                  </div>
                </div>
                <div className="item event">
                  <div className="content">
                    <h1>Events</h1>
                    <p>12 Aug <a href="#" title="Cuciculum">Cuciculum</a></p>
                    <p>12 Aug <a href="#" title="Cuciculum">Cuciculum</a></p>
                    <p>12 Aug <a href="#" title="Cuciculum">Cuciculum</a></p>
                    <p>12 Aug <a href="#" title="Cuciculum">Cuciculum</a></p>
                    <p>12 Aug <a href="#" title="Cuciculum">Cuciculum</a></p>
                  </div>
                </div>
                <div className="item navigation">
                  <div content>
                    <h1>Navigation</h1>
                    <ul>
                      <li><a href="#home" title="Home">Home</a></li>
                      <li><a href="#about" title="About">About</a></li>
                      <li><a href="#page" title="Pages">Pages</a></li>
                      <li><a href="#code" title="Code">Code</a></li>
                      <li><a href="#galerry" title="Galerry">Gallery</a></li>
                      <li><a href="#contact" title="Contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </main>
          <div className="footer-bottom">
            <p>
              @2017 Nojia TRAVELS All rights reverse | Design by: <a href="#">Me</a>
            </p>
          </div>
          <div className="go-up">
            <a href="#join" title="Move to Join"><img src="./img/arrow.png" alt="arrow" /></a>
          </div>
        </footer>
      </div>

    )
  }
}
