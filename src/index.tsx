import ReactDOM from "react-dom";
import App from './App'
import LukeDetails from "./LukeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="people/1/" element={<LukeDetails />}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);