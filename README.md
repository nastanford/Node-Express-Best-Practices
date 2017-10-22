# Node-Express-Best-Practices
This is my sample app that will explain the Best Practices for a Node Express Applications.

/app/ – Root Folder
/app/controllers/ – defines your app routes and their logic
/app/helpers/ – code and functionality to be shared by different parts of the project
/app/middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
/app/models/ – represents data, implements business logic and handles storage
/app/public/ – contains all static files like images, styles and javascript
/app/tests/ – tests everything which is in the other folders
/app/views/ – provides templates, Content which are rendered and served by your routes
/app/app.js – initializes the app and glues everything together
package.json – remembers all packages that your app depends on and their versions

