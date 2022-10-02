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

        <div className="home">
            <div className="text-wrap">
                <h1>No more<br></br>Boring websites.</h1>
                <p>
                Though, consumed with the hot fire of his purpose, Ahab in all his thoughts and actions ever had in view the ultimate capture of Moby Dick; though he seemed ready to sacrifice all mortal interests to that one passion; nevertheless it may have been that he was by nature and long habituation far too wedded to a fiery whaleman's ways, altogether to abandon the collateral prosecution of the voyage. Or at least if this were otherwise, there were not wanting other motives much more influential with him. It would be refining too much, perhaps, even considering his monomania, to hint that his vindictiveness towards the White Whale might have possibly extended itself in some degree to all sperm whales, and that the more monsters he slew by so much the more he multiplied the chances that each subsequently encountered whale would prove to be the hated one he hunted.
                </p>
                </div>
            </div>
    </div>
  );

  
}

export default App;
