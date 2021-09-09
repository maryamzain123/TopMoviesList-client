import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Switch } from "react-router"
import Home from "./components/Home/Home"
import Movies from "./containers/Movies/Movies"
import MovieForm from "./components/MovieForm/MovieForm"
import NavBar from "./components/Navbar/NavBar"
import MovieShow from "./components/MovieShow/MovieShow"


function App() {
  return (
    
    <div className="App-wrapper">
      <Router>
      
        <NavBar/>
        <Switch>
          <Route  path="/home" render={(routerProps => <Home {...routerProps} />)}/>
          <Route  path="/movies/new" render={(routerProps => <MovieForm {...routerProps} />)} />
          <Route  path="/movies/:id" render={(routerProps => <MovieShow {...routerProps} />)} />

          <Route  path="/movies" render={(routerProps => <Movies {...routerProps} />)} />
        </Switch>
      
    
      </Router>

    </div>
  );
}

export default App;
