import { Link } from "react-router-dom";
import { apiService } from "./apiService";

export default function Table({data}) {
    return (
    <table className='table table-dark table-striped'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {data.map((character) => {
                const charDetailPage = apiService.getPersonDetailUrl(character)
                return (
                    <tr key={character.name}>
                        <td key='name'><Link to={charDetailPage}>{character.name}</Link></td>
                        <td key='height'>{character.height}</td>
                        <td key='mass'>{character.mass}</td>
                        <td key='gender'>{character.gender}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    )
}