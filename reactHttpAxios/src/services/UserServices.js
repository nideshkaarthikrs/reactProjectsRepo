import axios from 'axios'
class UserServices {
    static getAllUsers() {
        let userDataAPI = "https://jsonplaceholder.typicode.com/users"
        return axios.get(userDataAPI)
    }
}

export default UserServices;