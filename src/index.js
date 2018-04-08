import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import registerServiceWorker from './registerServiceWorker';
import './theme/globalStyle';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
