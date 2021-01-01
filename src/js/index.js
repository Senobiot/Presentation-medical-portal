import '../css/reset.css';
import '../../node_modules/reveal.js/dist/reveal.css';
import '../../node_modules/reveal.js/dist/theme/black.css';
import '../../node_modules/reveal.js/plugin/highlight/monokai.css';
import '../../node_modules/reveal.js-appearance/plugin/appearance/appearance.css';
import '../css/style.css';
import '../css/style.scss';
import '../../node_modules/reveal.js/plugin/highlight/zenburn.css';
import Reveal from '../../node_modules/reveal.js/dist/reveal';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import Appearance from 'reveal.js-appearance/plugin/appearance/appearance.esm';

const deck = new Reveal({
  plugins: [Markdown, RevealHighlight, Appearance],
  appearance: {
    baseclass: 'animated',
    visibleclass: 'in',
    hideagain: true,
    delay: 300,
  },
});
deck.initialize();