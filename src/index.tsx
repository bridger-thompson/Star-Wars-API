import ReactDOM from "react-dom";
import React from "react";
import axios from "axios";

const baseURL = "https://swapi.dev/api/people/1/";

export default function App() {
    const [person, setPerson] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setPerson(response.data);
        });
    }, []);

    return (
        <div>
            <h1>{person.name}</h1>
            <div>{person.height}</div>
            <div>{person.gender}</div>
        </div>
    );
}

ReactDOM.render(
    App(), document.getElementById("root")
);