import './App.css';
import Home from "./views/Home /Home";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
      <Router>
        <Switch>
          <Route path={["/:topicId", "/"]}>
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
