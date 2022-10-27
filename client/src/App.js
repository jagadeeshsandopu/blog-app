import './App.css';
import Home from './pages/home'
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Write from './write/write'
import Single from './single/single'
import Login from './pages/login'
import Register from './pages/register';
import {Contextprovider} from './authcontext'

function App() {

  
   return (
  <Contextprovider>
   <BrowserRouter>
    <div className="App">
      <Switch>
         <Route path="/post/:id"> <Single/> </Route>
         <Route path="/write"> <Write/> </Route>
         <Route path="/login"> <Login/> </Route>
         <Route path="/register"> <Register/> </Route>
         <Route path="/" > <Home/> </Route>
         
      </Switch>
    </div>
   </BrowserRouter>
  </Contextprovider>
  );
}

export default App;
