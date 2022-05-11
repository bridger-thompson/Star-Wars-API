import React from "react";
import axios from "axios";
import Table from './table'

export default function App() {
    const [data, setData] = React.useState([]);
    const [pageURL, setPageURL] = React.useState("https://swapi.dev/api/people/");
    const [filters, setFilters] = React.useState(false);

    const handleSearch = (event) => {
        setPageURL("https://swapi.dev/api/people/?search=" + event.target.value)
    };

    const handleFilter = (filter) => {
        
    }

    React.useEffect(() => {
        axios.get(pageURL).then((response) => {
            console.log(response.data.results);
            setData(response.data.results);
        });
    }, [pageURL]);

    const headers = ['Name', 'Height', 'Mass', 'Gender']

    function PreviousPage() {
        axios.get(pageURL).then((response) => {
            if (response.data.previous != null) {
                console.log(response.data.previous)
                setPageURL(response.data.previous)
            }
        })
    }
    
    function NextPage() {
        axios.get(pageURL).then((response) => {
            if (response.data.next != null) {
                console.log(response.data.next)
                setPageURL(response.data.next)
            }
        })
    }

    return (
        <>
        <div>
            <label htmlFor="search">
                Search by Name:
                <input id="search" type="text" onChange={handleSearch} />
            </label>
            <div>
                <input type="radio" id="male" name="genderFilter" onChange={handleFilter}></input>
                <label>Male</label>
                <input type="radio" id="female" name="genderFilter" onChange={handleFilter}></input>
                <label>Female</label>
                <input type="radio" id="n/a" name="genderFilter" onChange={handleFilter}></input>
                <label>n/a</label>
            </div>
            <Table headers={headers} data={data}/>
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
        </>
    );
}