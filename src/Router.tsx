import { Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  ThemeToggleHandle: () => void;
  darkthemeActive: boolean;
}

function Router({ ThemeToggleHandle, darkthemeActive }: IRouterProps) {
  return (
    <Switch>
      <Route path="/:coinId">
        <Coin darkthemeActive={darkthemeActive} />
      </Route>
      <Route path="/">
        <Coins ThemeToggleHandle={ThemeToggleHandle} />
      </Route>
    </Switch>
  );
}

export default Router;
