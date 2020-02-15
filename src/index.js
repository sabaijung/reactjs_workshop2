import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import "./assets/style/customStyle.css";
//import './assets/fontawesome-free/css/all.min.css'

import "./assets/css/bootstrap.css";
import "./assets/css/bootstrap-theme.css";
//import './assets/css/sb-admin-2.css'

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
