import React from "react";
import { apiService } from "./apiService";

export default function LukeDetails() {
    const pageURL = "https://swapi.dev/api/people/1/"
    const [homeworldURL, setHomeworldURL] = React.useState("");
    const [data, setData] = React.useState("");
    const [homeworldData, setHomeworldData] = React.useState("")

    React.useEffect(() => {
        apiService
            .getHomeworldUrl(pageURL)
            .then(url => setHomeworldURL(url))
        apiService
            .getObjectDetails(pageURL)
            .then(data => setData(data))
        apiService
            .getObjectDetails(homeworldURL)
            .then(data => setHomeworldData(data))
    }, [homeworldURL])

    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li>Name: {data.name}</li>
                <li>Birth Year: {data.birth_year}</li>
                <li>Eye Color: {data.eye_color}</li>
                <li>Homeworld: {homeworldData.name}</li>
            </ul>
        </div>
    )
    
}