import './App.css';
import React from "react"
import {Box} from "@material-ui/core";
import Routes from "../config/routes";
import Button from "@material-ui/core/Button";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <Box>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Box>
    );
}

export default App;
