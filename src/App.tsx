import { HomePage } from "./components/home-page/HomePage";
import { OtherPage } from "./components/other-page/2025-anniversary/2025anniversary";
import { Redirect, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route path='/other-page/2025-anniversary'>
        <OtherPage />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
