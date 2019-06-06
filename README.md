# nodejs-training
Repository content for Megathon Node js training.

#Express Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

    1. Execute any code.
    2. Make changes to the request and the response objects.
    3. End the request-response cycle.
    4. Call the next middleware in the stack.

#Using middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

    1. Application-level middleware
    2. Router-level middleware
    3. Error-handling middleware
    4. Built-in middleware
    5. Third-party middleware

#Scoket.io
Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. It consists of:

 1. Node.js server: Source | API
 2. Javascript client library for the browser (which can be also run from Node.js): Source | API
