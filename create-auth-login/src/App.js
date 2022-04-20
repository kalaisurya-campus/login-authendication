import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./compoents/homepage/Home";
import Login from "./compoents/login/Login";
function App() {
    return (
        <div className="App">
          
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login}/>
                </Switch>
       
        </div>
    );
}

export default App;
