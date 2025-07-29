-create a repository
-Initialize the repository
-node_modules,package.json,package-lock.json
-Install express
-listen to port 7777
-write request handlers for /test,/hello
-Install nodemon and update scripts inside package.json
-what are dependencies
-what is the use of "-g" while npm install
-difference between caret and tilde (^ & ~)


-Initialize git
-.gitignore
-create a remote repo on github
-push all code to remote origin
-play with routes and route extensions ex:/hello,/,/hello/2
-order of the routes matter
-Install postman app and make workspace/collection -->test API call

-?,+,*  which means after advanced routings
-in express 4 the advanced routings are loosely interpreted but in express 5 versions we must and should need to use regular expressions.
-explore routing and use of +,*,?,() in routes
-use of regex in routes /a/,/.*fly$/
-Reading the query params in the routes
-Reading the dynamic routes

-multiple route handlers
-next()
-next function and errors along with the res.send()
-app.use("/route",rH,[rH2,rH3],rH4,rH5);#handling multiple routes using array
-what is a middleware and why we need it
-how express js basiclly handles requests behind the scenes
-Difference between app.use and app.all
-write a dummy auth middleware for admin
-write a dummy auth middleware for all user routes,except /user/login

express handles route handlers in a very funny way that if u pass 
-->2 parameters then it is req,res
-->3 parameters then it is req,res,next
-->4 parameters then it is err,req,res,next
"order is important here" if u pass next in 4 nad err at 4 tehn express will trear next as err and err as next

-error handling using app.use((err,req,res,next)={})

-create a free cluster on MongoDB official website(Mongo Atlas)
-Install mongoose library
-connect your application to the Database "connection-url"/devTinder
-call the connectDB function and connect to database before starting application on 7777