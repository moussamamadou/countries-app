import './assets/css/App.css';
import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import ThemeProvider, {ThemeContext} from './utils/ThemeProvider';

function App() {
  const [darkTheme] = useState(true);
  const theme = useContext(ThemeContext);
  console.log("App", theme);
  return (
    <ThemeProvider>
      <Router>
          <Header darkTheme={darkTheme}/>
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
