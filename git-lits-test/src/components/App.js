import './App.css';
import React from "react"
import {Box} from "@material-ui/core";
import Routes from "../config/routes";
import {BrowserRouter} from "react-router-dom";
import StylesProvider from '@material-ui/styles/StylesProvider';

function App() {

    return (
        <Box>
            <StylesProvider injectFirst>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </StylesProvider>
        </Box>
    );
}

export default App;
