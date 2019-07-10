import "../images/test.jpg";

// css import sequence impact cancat css
import "../styles/reset.css";
import "../styles/index.scss";
import "../styles/progressive-load.scss";

import ProgressiveLoad from './progressive-load'

// progressive load image
new ProgressiveLoad()
