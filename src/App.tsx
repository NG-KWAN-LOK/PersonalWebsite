import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/home-page/HomePage";

function App() {
  return (
    <Switch>
      {/* Add other pages here, e.g. <Route path='/other-page/foo'><Foo /></Route> */}
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
