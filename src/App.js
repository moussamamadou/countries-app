import './assets/css/App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

function App() {
  const [darkTheme, setdarkTheme] = useState(true);

  return (
    <Router>
      <div className={darkTheme ? "App dark" : "App light"}>
        <Header darkTheme={darkTheme}/>
        <Switch>
          <Route path='/' exact >
            <HomePage />
          </Route>
          <Route path='/:code' >
            <CountryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
