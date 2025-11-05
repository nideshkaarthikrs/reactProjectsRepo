import { useEffect, useState } from "react"
import UserServices from "../services/UserServices"

const UsersList = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    UserServices.getAllUsers()
    .then(response => setUsers(response.data))
    .catch(err => alert(err.toString()))
  }, [])  
  console.log(users)
  return (
    <>
    <h1>List of Users</h1>
        {
                users.length>0 && users.map((user)=> {
                    return (
                    <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    </ul>
                    )
                })
            
        }
    </>
  )
}

export default UsersList