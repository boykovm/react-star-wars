import styles from './App.module.scss';
// import {getApiResource} from '../../utils/network'
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import {PeoplePage} from "../PeoplePage/PeoplePage";

// getApiResource()

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
