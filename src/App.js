import './sass/App.sass';
import Table from './components/Table';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/table-reducer';

function App() {

  const [users, setUsers] = useState([])
  const [searchState, setSearchState] = useState('');
  
  const [originalUsers, setOriginalUsers] = useState([])


  const dispatch = useDispatch()
  useEffect(() => dispatch(getUsers()), [])


  const usersFromStore = useSelector(state => state.tablePage.users)

  useEffect(() => {
    setUsers(usersFromStore)
    setOriginalUsers(usersFromStore)
  }, [usersFromStore])


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
