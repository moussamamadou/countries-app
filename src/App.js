import './assets/css/App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
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
