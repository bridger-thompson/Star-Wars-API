import ReactDOM from "react-dom";
import App from './App';
import LukeDetails from "./LukeDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="people/1/" element={<LukeDetails />}></Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>,
    document.getElementById("root")
);