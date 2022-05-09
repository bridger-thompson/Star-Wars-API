import React from "react";
import axios from "axios";
import Table from './table'

const baseURL = "https://swapi.dev/api/people/?page=1";

export default function App() {
    const [data, setData] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filters, setFilters] = React.useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    };

    const handleFilter = (filter) => {
        
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data.results);
            setData(response.data.results);
        });
    }, []);

    const filteredData = {
        data: data.filter((item) => 
        item.name.toLowerCase().includes(search.toLowerCase())),
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'Star Wars Characters',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Height',
                        accessor: 'height',
                    },
                    {
                        Header: 'Mass',
                        accessor: 'mass',
                    },
                    {
                        Header: 'Gender',
                        accessor: 'gender',
                    },
                ],
            },
        ], []
    )

    return (
        <div>
            <label htmlFor="search">
                Search by Name:
                <input id="search" type="text" onChange={handleSearch} />
            </label>
            <div>
                <input type="radio" id="male" name="genderFilter" onChange={handleFilter}></input>
                <label for="male">Male</label>
                <input type="radio" id="female" name="genderFilter" onChange={handleFilter}></input>
                <label for="male">Female</label>
                <input type="radio" id="n/a" name="genderFilter" onChange={handleFilter}></input>
                <label for="male">n/a</label>
            </div>
            <Table columns={columns} data={filteredData.data} />
        </div>
    );
}