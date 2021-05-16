import PeoplePage from "../PeoplePage/PeoplePage";
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'

// eslint-disable-next-line
import styles from './App.module.scss';

export const App = () => {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path='/' exact component={PeoplePage} />
              </Switch>
          </Router>
        {/*<h1 className={styles.header}>Hello</h1>*/}
      </div>
  );
}
