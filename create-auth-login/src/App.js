import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./compoents/homepage/Home";
import Login from "./compoents/login/Login";
import NewLogin from "./compoents/newlogins/NewLogin";
import NewLogout from "./compoents/newlogout/NewLogout";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";
import { useState } from "react";
import settings from "./assests/settings.png";
import Todo from "./compoents/todoapp/Todo";
function App() {
    const [colors, SetColors] = useState([]);

    console.log(colors);

    return (
        <div className="App">
            <div className="box12">
                <Tippy
                    interactive={true}
                    content={
                        <CirclePicker
                            color={colors}
                            onChangeComplete={(color) => SetColors(color.hex)}
                        />
                    }
                >
                    <div>
                        <img src={settings} className="settings" />
                    </div>
                </Tippy>
            </div>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Home color={colors} name="kalai" />}
                />
                <Route path="/login" render={() => <Login />} />
                <Route
                    path="/newlogin"
                    render={() => <NewLogin color={colors} name="kalai" />}
                />
                <Route path="/newlogout" component={NewLogout} />
                <Route path="/todo" render={() => <Todo color={colors} />} />
            </Switch>
        </div>
    );
}

export default App;
