import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import registerServiceWorker from './registerServiceWorker';
import './theme/globalStyle';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
