
export default function Table({headers, data}) {
    

      return (
        <>
            <table className='table'>
            <thead>
                <tr>
                    {headers.map((element) => {
                        return <th scope='col'>{element}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((character) => {
                    return (
                        <tr>
                            <td>{character.name}</td>
                            <td>{character.height}</td>
                            <td>{character.mass}</td>
                            <td>{character.gender}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
      )
}