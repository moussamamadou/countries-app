import './assets/css/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import ThemeProvider from './utils/ThemeProvider';

function App() {
  return (
    <ThemeProvider>    
        <Router>
            <Header/>
            <Switch>
              <Route path='/' exact >
                <HomePage />
              </Route>
              <Route path='/:code' >
                <CountryPage />
              </Route>
            </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
