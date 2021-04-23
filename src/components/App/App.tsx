import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import appStyles from './AppStyles';
import BuyPlane from '../BuyPlane';

const App = () => {
  const useStyles = appStyles();
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route path="/">
            <main className={useStyles.mainContent}>
              <BuyPlane />
            </main>
          </Route>
        </Switch>
      </HashRouter>
    </React.Fragment >
  );
};

export default App;
