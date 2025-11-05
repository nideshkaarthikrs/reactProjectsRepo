HTTP Methods:
-------------

1. GET

Purpose: Retrieve data from the server.

Characteristics:
Doesn’t change anything on the server (read-only).
Data is usually sent in the URL (as query params).
Can be cached by browsers, stored in history, and bookmarked.

Example:
GET /users → fetch list of users.
GET /users/5 → fetch details of user with ID = 5.

2. POST

Purpose: Create a new resource on the server.

Characteristics:
Sends data in the request body (not visible in URL).
Used when you’re submitting forms, uploading files, or creating new database entries.

Example:
POST /users with body { "name": "Alice", "age": 25 } → creates a new user.

3. PUT

Purpose: Update/replace an existing resource (entirely).

Characteristics:
You send the full updated data in the request body.
If some fields are missing, they may get overwritten or reset.

Example:
PUT /users/5 with body { "name": "Alice", "age": 30 } → updates user 5’s info (overwrites all fields).

4. PATCH

Purpose: Update part of an existing resource.

Characteristics:
Only the fields you include will be updated.
More efficient when you just want to change one small thing.

Example:
PATCH /users/5 with body { "age": 31 } → updates only the age of user 5 (other fields remain unchanged).

5. DELETE
Purpose: Remove a resource.

Characteristics:

Deletes data permanently (or marks it as deleted, depending on the API).
Usually doesn’t require a body.

Example:
DELETE /users/5 → deletes the user with ID = 5.


Analogy with CRUD:
-----------------

Create = POST/endpoint
Read = GET/endpoint
Update = PATCH/endpoint/:id
         PUT/endpoint/:id
Delete = DELETE/endpoint/:id

Application Programming Interface (API):
----------------------------------------

API (Application Program Interface) are the codes that governs the access point of your application to communicate with other application in an agreed way (Request and Response).

It is a software interface that allows two applications to interact with each other without any user intervention.

REST (Representational State Transfer) is an API that allows you to access or manipulate the resource using a set of predefined operations through HTTP protocol methods.

REST APIs are used in most of the applications as the requests are based on the universal HTTP protocol, and returns the data in JSON format which most of the programming languages can read.

Simplified explanation:
-----------------------

🌐 What is an API?

An API (Application Programming Interface) is like a messenger 📨 between two applications.
It takes your request → goes to the server → brings back the response → hands it to you.
Example: You type “London” in your weather app → API goes to OpenWeather → fetches the weather → sends it back to your app.

🛠️ Why APIs?

They let different applications talk to each other without you worrying about what’s inside them.
Instead of building everything yourself, you can just ask another service for the data or feature you need.

🔹 REST API (the most common type)
REST (Representational State Transfer) is a style of API.It uses HTTP methods (GET, POST, PUT, DELETE, PATCH) to interact with resources.
Every request follows the same structure:
You send a request (like "GET weather for Delhi").
Server responds (with data, usually in JSON).

🔹 JSON format
JSON = JavaScript Object Notation.
It’s a simple, human-readable way of representing data.
Example:
{
  "city": "Delhi",
  "temp": 30,
  "condition": "Clear sky"
}

CREATING FAKE REST APIs:
------------------------

While building a frontend web application, if you want to connect to backend or consume a remote data using API, you need a server.
We have to make use of json-server
json-server is a node module that helps you to set up a REST API and provide dynamic access to the remote data

🔹 What is json-server?
It’s a small tool (Node.js package) that lets you create a fake backend.
Instead of writing a real backend with databases and APIs, you just create a db.json file (like a mini-database).
json-server then automatically turns that file into a REST API you can call with GET, POST, PUT, DELETE.

🔹 Example

If your db.json file looks like this:
{
  "users": [
    { "id": 1, "name": "Nidesh" },
    { "id": 2, "name": "Kaarthik" }
  ]
}
After running json-server, it will give you APIs like:

GET /users → returns all users
GET /users/1 → returns first user
POST /users → add a user
PUT /users/1 → update first user
DELETE /users/2 → delete second user

And you can call these APIs from your React frontend just like a real server.

1) Create the db.json file with data
2) To setup the json-server: (default port 3000)

    (i) Approach 1:
    Run the command:
    npx json-server db.json 

    (ii) Approach 2:
    Run the command:
    - npm install json-server
    - Then in the package.json file in the "scripts" object add a key value   pair like "apiserver" : "json-server --watch db.json"
    - the key can be named anything... In the value, --watch monitors the db.json file continuously for any changes being made
    - to change the port we can also give like 
    "json-server --watch db.json -p 2323" // (-p <portNumber>)
    - To run the server use the command: npm run apiserver
    - Now we will be able to make api calls using the links that are given

***EXAMPLE FROM THIS PROJECT:***
- the APIs that are generated are 

GET requests can be sent using:

- http://localhost:3000/Products
- http://localhost:3000/Reviews

GET request with PathParameters/Variable
- we can use path parameters like http://localhost:3000/Reviews/2

GET request with filtering
- we can also use search parameters for filtering like
http://localhost:3000/Reviews?rating=4

GET request with sorting
- we can also sort the data based on any key like 
http://localhost:3000/Products?_sort=price,category (this will return all the objects sorted in ascending order based on price, but if the prices are equal, then it will sort based on category)
for descending order sort just put a minus sign before the keys i.e. like
http://localhost:3000/Products?_sort=-price

PAGINATION:
----------
Pagination in web development is a technique used to divide a large set of data into smaller, discrete pages. Instead of displaying all results at once, which can be overwhelming and slow to load, pagination presents a manageable subset of data per page. Users can then navigate through these pages to view the entire dataset.
eg: 
http://localhost:3000/Products?_limit=4 (will only return the first 4 objects)
(here we have 10 records in the Products array)
http://localhost:3000/Products?_page=1&_per_page=5 (this will return first 5 records in first page)
http://localhost:3000/Products?_page=2&_per_page=5 (this will return next 5 records in second page)
http://localhost:3000/Products?_start=0&_end=4 (this will return the records starting from id 1 till id 4)
http://localhost:3000/Products?_start=2&_end=7 (this will return the records starting from id 3 till id 7)

For other such stuff refer: 
https://www.npmjs.com/package/json-server

API WITH POST METHOD:
---------------------
To test this, we can use tools like PostMan , Talend API tester (chrome extension), Thunder Client (vs code extension) etc...
Select POST, then type the url of the array of objects (like http://localhost:3000/Products) , then in the body tab, put the object/record to be added to the array, then click send.
These tools can also be used for PUT, DELETE, GET, UPDATE, PATCH etc...
