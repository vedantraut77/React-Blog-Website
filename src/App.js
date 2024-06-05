import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import blogDetails from './blogDetails';
import NotFound from './NotFound';


function App() {
  return (

    <Router>

      <div className='App'>
        <Navbar />

        <div className='content'>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/create' Component={Create} />
            <Route path='/blogs/:id' Component={blogDetails} />
            <Route path='*' Component={NotFound} />
          </Routes>
        </div>
      </div>

    </Router>
  );


}

export default App;
