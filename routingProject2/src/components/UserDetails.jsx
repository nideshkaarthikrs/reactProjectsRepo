import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    let params = useParams()
    const userId = params.uid
  return (
    <div>
        <h2>Details of User {userId} </h2>
    </div>
  )
}

export default UserDetails