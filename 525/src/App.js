import './App.css';
import Preloader from './pages/preloader.jsx'
import $ from 'jquery';
require('velocity-animate');
require('velocity-animate/velocity.ui');

function App() {

$('document').ready( function() {
  setTimeout(() => {
    $('.preloaderContainer').addClass("fade-out");
    setTimeout(() => {
      $('.home').addClass('animate-border divide');
    }, 2000);
  }, 2000)
});
  return (
    <div className="App">

        <Preloader />
    <div className="sections-container">
        <div className="home section">
          <div className="navbar">
            <ul>
              <li>
                <a className="navbar-item navbar-item-active" href="#">HOME</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" href="#work">WORK</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" href="#about">ABOUT</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" href="#contact">CONTACT</a>
                <div className="navbar-item-line"></div>
              </li>
            </ul>
          </div>
          <div className="hero-left">
          <div className="hero-left-text">
            <span>I'm a</span>
            <div className="hero-left-text-2-container">
              <div className="wordAnimation" id="designer">
                designer <img alt="designer" src="https://cdn-icons-png.flaticon.com/512/2219/2219569.png" style={{width: "60px"}}></img>
              </div>
              <div className="wordAnimation" id="coder">
                coder <img alt="coder" src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png" style={{width: "60px"}}></img>
              </div>
              <div className="wordAnimation" id="coolguy">
                cool guy <img alt="coolguy" src="https://cdn-icons-png.flaticon.com/512/7626/7626827.png" style={{width: "60px"}}></img>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="about section" id="#">
        <a>Lorem20dds
          ad
          sa
          da


        </a>
        </div>
      </div>
    </div>
  );

  
}

export default App;
