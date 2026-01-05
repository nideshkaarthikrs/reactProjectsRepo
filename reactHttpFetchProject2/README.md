# Using async/await instead of Promises()

1. In asynchronous JS, async/await is a much cleaner alternative for Promises.
2. await keyword needs to be used for waiting for a certain task to be completed. 
eg: while waiting for the api to return the data
3. await keyword must be used inside an async function
4. In Promises, we had .catch() to catch the errors... But in this case we will use try...catch blocks (exception handling) to catch the errors (if the api doesn't return data or server error etc...)

# Use POST method to create a new record

* To do POST Mapping, we need to use the fetch() method to send the data.
* But this time we will pass a second argument , which is an object mentioning the method, body (content to be sent), request header (not mandatory)
* fetch("<urlForGet>", {
    method: <methodName>,
    body: JSON.stringify(data),    // converting object to JSON
    headers: { "Content-Type": "application/json" }    // request header (optional)
})

* In the context of a REST API, a request header is a key-value pair included in an HTTP request that provides metadata about the request itself, the client making the request, and the expected format of the response. These headers are distinct from the request body, which contains the actual data being sent to the server. 

* Purpose of Request Headers:

   1. Providing Context: They offer information to the server to help it process the request correctly.
   2. Authentication and Authorization: Headers like Authorization carry credentials (e.g., API keys, tokens) to verify the client's identity and permissions.
   3. Content Negotiation: Headers like Accept and Content-Type inform the server about the data formats the client can send and receive.
   4. Caching Control: Headers like Cache-Control guide how the response should be cached.
   5. Client Information: The User-Agent header identifies the software making the request. 

* Common Request Header Examples:

    1. Accept: Specifies the media types (e.g., application/json, text/xml) the client is willing to accept in the response.
    2. Content-Type: Indicates the media type of the data contained in the request body (e.g., application/json for JSON data).
    3. Authorization: Carries authentication credentials for accessing protected resources.
    4. User-Agent: Identifies the client software or application making the request. 
    5. Cache-Control: Directs caching mechanisms for the request and response. 
    6. Host: Specifies the domain name of the server to which the request is being sent.
