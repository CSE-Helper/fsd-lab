//App.js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
      </div>
    </Router>
  );
}

export default App;

//Home.js
import React from 'react';

function Home() {
  return <h2>Home</h2>;
}

export default Home;

//About.js
import React from 'react';

function About() {
  return <h2>About</h2>;
}

export default About;

//Blog.js
import React from 'react';

function Blog() {
  return <h2>Blog</h2>;
}

export default Blog;
