import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './component/navbar.component';
import Footer from './component/footer.component';
import Homepage from './component/homepage.component';
import SinglePage from './component/single-page.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Homepage} />
        <Route path="/single-page/:id" component={SinglePage} />
        <Route path="/page/:pageNumber" component={Homepage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
