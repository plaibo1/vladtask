import SearchBar from "./SearchBar";
import { useState } from "react";

const Table = ({ searchState, setSearchState, userList, originalUsers, users, setUsers }) => {

    const [order, setOrder] = useState('asc');

    const sorting = (col) => {

        if (order === 'asc') {
            const sorted = [...users].sort((a, b) => {
                return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            })

            setUsers(sorted);
            setOrder('dsc')
        }

        else if (order === 'dsc') {
            const sorted = [...users].sort((a, b) => {
                return a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            })

            setUsers(sorted);
            setOrder('original')
        }

        else {
            setUsers(originalUsers);
            setOrder('asc')
        }

    }

    return (
        <div className="container">

            <SearchBar searchState={searchState} setSearchState={setSearchState} />

            <table className="table">
                <tbody>
                    <tr className="table__titles">
                        <th onClick={() => sorting('username')}>Username</th>
                        <th onClick={() => sorting('email')}>Email</th>
                        <th onClick={() => sorting(`address`)}>Street</th>
                    </tr>

                    {userList}
                    {!userList.length && <tr><th>not found</th></tr> }
                </tbody>
            </table>

        </div>
    )

}

export default Table;