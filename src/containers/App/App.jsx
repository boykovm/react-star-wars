import {BrowserRouter as  Router, Route, Switch, NavLink} from 'react-router-dom'
import {routesConfig} from "../../routes/routesConfig";
import {Header} from "../../components/Header/Header";

// eslint-disable-next-line
import styles from './App.module.scss';

export const App = () => {
  return (
      <>
          <Router>
              <Header />

              <Switch>
                  {routesConfig.map((route, idx) => (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />

                      ))}
              </Switch>
          </Router>
        {/*<h1 className={styles.header}>Hello</h1>*/}
      </>
  );
}
