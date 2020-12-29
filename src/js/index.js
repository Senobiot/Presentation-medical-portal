import '../css/reset.css';
import '../../node_modules/reveal.js/dist/reveal.css';
import '../../node_modules/reveal.js/dist/theme/black.css';
import '../../node_modules/reveal.js/plugin/highlight/monokai.css';
import '../../node_modules/reveal.js-appearance/plugin/appearance/appearance.css';
import '../css/style.css';
import '../css/style.scss';
import '../../node_modules/reveal.js/plugin/highlight/zenburn.css';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Appearance from 'reveal.js-appearance/plugin/appearance/appearance.esm';


{/* <script src="/path/to/highlight.min.js"></script> */}



let deck = new Reveal({
   plugins: [ Markdown ],
   plugins: [ RevealHighlight ],
   appearance: {
		// The baseclass uses the baseclass from Animate.css. Change it if you like
		baseclass: 'animated',
		// Use a specific class for the visible state.
		visibleclass: 'in',
		// Change this if you want to see the shown elements if you go back
		hideagain: true,
		// Base time between appearances
		delay: 300
		
	},
   plugins: [ Appearance ]
})
deck.initialize();
