import './App.css';
import Home from "./views/Home /Home";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Error from "./components/Error";


function App() {
  return (
      <Router>
        <Switch>
            <Route path={"/error"}>
                <Error />
            </Route>
            <Route exact path={["/:topicId", "/"]}>
                <Home />
            </Route>
            <Route path={"*"}>
                <Error />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
