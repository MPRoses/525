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


  var items = document.getElementById("navbar-ul").children;

  for (var i = 0; i < 4; i++) {
    items[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("navbar-item-active");
      current[0].className = current[0].className.replace(" navbar-item-active", "");
      this.firstChild.className += " navbar-item-active";
    });
  }

  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor'),
    $outline: document.querySelector('.cursor__ball'),
    ZIndex: 1500000,
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        
        // Click events

       document.addEventListener('mousedown', function() {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function() {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
      });
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
          $(".cursor__ball").css("transform", "scale(1.2)")

        } else {
          console.log(2)
        $(".cursor__ball").css("transform", "scale(1)")
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();

});





  return (
    <div className="App">
    <Preloader />

    <div className="sections-container">
        <div className="home section">
          <div className="navbar">
            <ul id="navbar-ul">
              <li>
                <a className="navbar-item navbar-item-active"
                id="navbar-item-home" href="#">HOME</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" id="navbar-item-work" href="#work">WORK</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" id="navbar-item-about" href="#about">ABOUT</a>
                <div className="navbar-item-line"></div>
              </li>
              <li>
                <a className="navbar-item" id="navbar-item-contact" href="#contact">CONTACT</a>
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
      <div class="cursor">
  <div class="cursor__ball cursor__ball--big ">
    <svg height="30" width="30">
      <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
    </svg>
  </div>
  
  <div class="cursor__ball cursor__ball--small" style={{opacity: "0"}}>
    <svg height="10" width="10">
      <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
    </svg>
  </div>
</div>
    </div>
  );

  
}

export default App;
