import React from "react";
import {render} from "react-dom";
import {Router,browserHistory} from "react-router";
import routes from "./myroutes";

render(<Router routes={routes} history={browserHistory}></Router>,document.getElementById("container"));