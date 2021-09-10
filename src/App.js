// import './App.css';
import Header from './components/header'
import Market from './components/market';
import Coin from './components/coin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div>
          <Switch>
            <Route path="/coin/:id">
              <Coin />
            </Route>
            <Route path="/">
              <Market />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
