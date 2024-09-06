import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CertificationsPage from './components/CertificationsPage';
import CompTIACertificationsPage from './components/CompTIACertificationsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/certifications" component={CertificationsPage} />
        <Route path="/comptia" component={CompTIACertificationsPage} />
      </Switch>
    </Router>
  );
}

export default App;
