import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";


const Table = () => {

    const [users, setUsers] = useState([])

    const [searchState, setSearchState] = useState('');

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))

    }, [])

    const filterName = users.filter(u => {
        return u.username.toLowerCase().includes(searchState.toLowerCase())
    })

    const userList = filterName.map((u, index) => 
        <tr key={u.id} className={`table__values ${index % 2 !== 0 ? 'light' : ''}`} >
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.address.street}</td>
        </tr>
    )

    return(
        <div className="container">
            
            <SearchBar searchState={searchState} setSearchState={setSearchState} />

            <table className="table">
                <tbody>
                    <tr className="table__titles">
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                    </tr>

                    {userList}
                </tbody>
            </table>
        </div>
    )

}   

export default Table;