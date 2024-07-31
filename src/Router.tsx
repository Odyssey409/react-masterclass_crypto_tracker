import { Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <Switch>
      <Route path="/:coinId">
        <Coin />
      </Route>
      <Route path="/">
        <Coins />
      </Route>
    </Switch>
  );
}

export default Router;
