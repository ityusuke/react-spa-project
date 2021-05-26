import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TOP } from "../components/pages/Top";
import { User } from "../components/pages/User";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <TOP />
          </DefaultLayout>
        </Route>
        <Route path="/user">
          <HeaderOnly>
            <User />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
