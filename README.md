# nodejs-training
Repository content for Megathon Node js training.

#Express Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

    1. Execute any code.
    2. Make changes to the request and the response objects.
    3. End the request-response cycle.
    4. Call the next middleware in the stack.

