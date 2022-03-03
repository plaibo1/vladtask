import './sass/App.sass';
import Table from './components/Table';
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([])
  const [searchState, setSearchState] = useState('');
  
  const [originalUsers, setOriginalUsers] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json)
        setOriginalUsers(json)
      })

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


  return (
    <div className="App">
      <Table
        searchState={searchState}
        setSearchState={(e) => setSearchState(e.target.value)}
        userList={userList}
        originalUsers={originalUsers}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}

export default App;
