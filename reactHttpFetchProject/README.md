REACT WITH HTTP:
----------------
Here we will learn how to make GET/POST/PUT/PATCH/DELETE, from our react application.

[WebApp (ReactApp)  ]  Fetch data from ------------> [ Server ] 
Data should be assigned to props & state <----------
We should be able to send data    ---------------->                       

For this we will use HTTP library.

AJAX = Asynchronous JavaScript And XML:
It’s a way for your webpage to talk to a server and get data (or send data) without reloading the whole page.

Before AJAX:
In the old days, if you wanted new data (say weather updates), the whole webpage had to refresh. That was slow and clunky.

🔹 With AJAX:
The page can make a background request to the server (API call).
The server sends back data (usually in JSON nowadays, XML was used earlier).
Your page updates the UI dynamically — without a refresh.

Key Points:
Asynchronous → It doesn’t block the page while waiting for a response.
JavaScript → Written in JS (traditionally used XMLHttpRequest, now replaced with Fetch API or axios).
And XML → Name is old; today JSON is used instead of XML.

Fetch API:
----------
Fetch API is a javascript library that helps us to make HTTP requests
fetch() is the function used in Fetch API
Fetch API is Promise based. (Asynchronous JS)
fetch() returns a Promise

(Promises are useful when we need to do something that takes a long time in the background like downloading an image from a different server and we wanna do something after it is completed)

👉 Async tasks are things that take time, like:
Fetching data from a server (API call 🌐)
Reading files
Waiting for a timer

When an async task happens, JS says:
“Okay, I’ll start this task, but meanwhile, I’ll move on.
When it finishes, I’ll come back with the result.”

When we do async things (like API calls), we need a way to handle results later.
That’s what Promises are.

👉 A Promise is like a container for a value that you don’t have yet, but will get in the future.

It has 3 states:
Pending → waiting --> result is undefined
Fulfilled → success (got the data) --> result: value is obtained
Rejected → failure (error happened) --> result: error object

example:

let flag = true;
let p = new Promise((resolve,reject) => {
    if (flag) {
        resolve("Success") // when the promise is fulfilled
    }else {
        reject("Oh shit! It failed!") // when the promise is broken
    }
})

p.then((message) => {
    console.log("Promise got fulfilled" + message)
} ).catch((message) => {
    console.log("Promise failed" + message)
})

// the .then() part runs when promise is fulfilled and the message parameter gets the text inside resolve()
// the .catch() part runse when the promise fails and the message parameter gets the text inside reject()

Using fetch() method:
---------------------

Here we are doing API call, hence we need to use the useEffect() hook
If we want fetch() to run only once to get the data, then we use the second variation of useEffect() i.e. useEffect() with empty array as dependency, so that fetch() runs only once , when the page first loads 

fetch("APIURL").then(response => response.json()).then(data => setState(data))

So here, we pass the API as a parameter to the fetch() method and first .then() wil get the data from the server in some object kinda format so we are converting it into json and returning it. Now, the second .then() can be used to use the data however we want... here i've obtained the data in a parameter named 'data' and i am assigning it to a state

For running it only once:
useEffect(() => {
    fetch("APIURL").then(response => response.json()).then(data => setState(data)).catch(err => console.log(err))
},[])

If we use fetch() without using useEffect() then the fetch() method will be implicitly called whenever the state changes and it will eventually become an infinite loop.
