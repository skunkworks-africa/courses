import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompTIACertificationsPage from './components/CompTIACertificationsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/comptia" component={CompTIACertificationsPage} />
        {/* Add more routes here if necessary */}
      </Switch>
    </Router>
  );
}

export default App;
