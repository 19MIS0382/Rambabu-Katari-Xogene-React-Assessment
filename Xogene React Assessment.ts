Xogene React Assessment
1.Set Up the Project:
2.Create Routes:

Code:
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DrugSearch from './components/DrugSearch';
import DrugDetails from './components/DrugDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/drugs/search" component={DrugSearch} />
        <Route path="/drugs/:drugName" component={DrugDetails} />
      </Switch>
    </Router>
  );
}

export default App;
3. Build Components:
	DrugSearch Component
	DrugDetails Component
