import React from "react";
import Table from './table';
import { apiService } from "./apiService";
import { useQuery } from "react-query";

export default function App() {
    const [data, setData] = React.useState([]);
    const [pageURL, setPageURL] = React.useState("https://swapi.dev/api/people/");

    const { status } = useQuery([pageURL, data], () => {
        apiService
            .getPeopleArray(pageURL)
            .then(data => setData(data))
    })

    const handleSearch = (event) => {
        setPageURL("https://swapi.dev/api/people/?search=" + event.target.value)
    };

    function PreviousPage() {
        apiService
            .getPrevUrl(pageURL)
            .then(url => setPageURL(url))
    }

    function NextPage() {
        apiService
            .getNextUrl(pageURL)
            .then(url => setPageURL(url))
    }

    return (
        <>
            <div>
                <label htmlFor="search">
                    Search by Name:
                    <input id="search" type="text" onChange={handleSearch} />
                </label>
                <Table data={data} />
            </div>
            <nav aria-label="Table navigation">
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <button type="button" className="btn btn-outline-primary" onClick={PreviousPage}>Previous</button>
                    </li>
                    <li className="page-item">
                        <button type="button" className="btn btn-outline-primary" onClick={NextPage}>Next</button>
                    </li>
                </ul>
            </nav>
            <div className="status">
                {status === "loading" ? <p>Fetching data...</p> 
                : status === "success" ? <p>Data Loaded</p>
                : <p>Error fetching data</p>}
            </div>
        </>
    );
}