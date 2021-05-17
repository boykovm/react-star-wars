import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import routesConfig from "../../routes/routesConfig";
import {Header} from "../../components/Header/Header";

import styles from './App.module.scss';

export const App = () => {
  return (
      <>
          <Router>
              <div className={styles.wrapper}>
                  <Header />

                  <Switch>
                      {routesConfig.map((route, index) => (
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                          />

                      ))}
                  </Switch>
              </div>
          </Router>
        {/*<h1 className={styles.header}>Hello</h1>*/}
      </>
  );
}
