import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {transitions,positions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import App from "./App";
import "./index.css";
import "react-confirm-alert/src/react-confirm-alert.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '90px',
    // you can also just use 'scale'
    transition: transitions.SCALE,
    overlay:true,
}

root.render(
    <React.StrictMode>
        <AlertProvider template={AlertTemplate} {...options}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AlertProvider>
    </React.StrictMode>,
);
