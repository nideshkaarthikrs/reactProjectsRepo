# AXIOS LIBRARY

* Axios is a popular HTTP library which is used to connect with the server and to make API calls (GET/POST/PUT/UPDATE/DELETE)

* Similar to fetch() , axios is also a Promise-based library

* This time to get fake data we are not going to use JSON server and create fake data. We are going to get fake APIs from JSONplaceholder website
(API used in this project : https://jsonplaceholder.typicode.com/users)

* To work with AXIOS we need to install it:
npm install axios (in the project folder)

* Import it in the file where the business logic is written:
import axios from 'axios'

*** Note ***
In this project we are not only having components folder inside src. We are also having services folder. Here we are trying to separate the business logic from the UI (component).
So, the business logic goes inside services and UI is taken care by components.

## GET Mapping using AXIOS

* axios.get(<API>) returns a Promise

* axios.get(<API>)
  .then(response => setState(response.data))  // here response.data returns all the data in an array

