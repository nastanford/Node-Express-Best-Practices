# Node-Express-Best-Practices
This is my sample app that will explain the Best Practices for a Node Express Applications.

  ## Folder Structure
  * /app/ – Root Folder
  * /app/controllers/ – defines your app routes and their logic
  * /app/helpers/ – code and functionality to be shared by different parts of the project
  * /app/middlewares/ – Middlewares process the incoming requests before handling them to routes
  * /app/models/ – represents data, implements business logic and handles storage
  * /app/public/ – contains all static files like images, styles and javascript
  * /app/tests/ – tests everything which is in the other folders
  * /app/views/ – provides templates, Content which are rendered and served by your routes
  * /app/app.js – initializes the app and glues everything together
  * package.json – remembers all packages that your app depends on and their versions

## Steps to add a new section and link
* Add to the app.js a input of a new controller
* Make the new controller in the controller folder
* In the controller make a list of all routes that this controller will handle.
* Make a view for each route that has need of a view.
* For a larger site you can create folder to seperate more organize them.

