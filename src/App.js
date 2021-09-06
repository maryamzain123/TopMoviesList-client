import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home"
import Movies from "./containers/Movies"
import MovieForm from "./components/MovieForm"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar/>
      <Switch>
     <Route  path="/home" render={(routerProps => <Home {...routerProps} />)}/>
     <Route  path="/movies/new" render={(routerProps => <MovieForm {...routerProps} />)} />
     <Route  path="/movies" render={(routerProps => <Movies {...routerProps} />)} />
     
     
     </Switch>
      
    </div>
    </Router>
    </div>
  );
}

export default App;
