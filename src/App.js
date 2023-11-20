import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Create from './create';
import Update from './update'
import BlogDetails from './blog-details';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/update/:id">
          <Update/>
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
