import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/header";
import AuthRouter from "./auth";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {AuthRouter.map((item, index) => {
            return (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            );
          })}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
