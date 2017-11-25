# Node-Express-Best-Practices
This is my sample app that will explain the Best Practices for a Node Express Applications.

  ## Folder Structure
  * package.json – remembers all packages that your app depends on and their versions
  * /tests/ – tests everything which is in the other folders
  * /tests/example/ – recursive tests to keep the seperated
  * /app/ – Root Folder
  * /app/controllers/ – defines your app routes and their logic
  * /app/helpers/ – code and functionality to be shared by different parts of the project
  * /app/middlewares/ – Middlewares process the incoming requests before handling them to routes
  * /app/models/ – represents data, implements business logic and handles storage
  * /app/public/ – contains all static files like images, styles and javascript
  * /app/views/ – provides templates, Content which are rendered and served by your routes
  * /app/app.js – initializes the app and glues everything together

  ## Project Examples
  * Simple Blog
  * To Do List


```
|-- package.json
|-- .gitignore
|-- tests
|   `-- tests - client X 
|   |
|   `-- tests - client Y 
|-- app
|   |-- app.js
|   |-- controllers
|   |-- helpers
|   |-- middleware
|   |-- models
|   |-- public
|   |-- views
|   `-- client X (client X specific items)
|       |-- controllers
|       |-- helpers
|       |-- middleware
|       |-- models
|       |-- public
|       `-- views
|       
|   `-- client Y (client Y specific items)
|       |-- controllers
|       |-- helpers
|       |-- middleware
|       |-- models
|       |-- public
|       `-- views
|       
|-- node_modules
|-- config
|    |-- application.js
|    `-- locale
|        `-- en.js
|    |-- routes.js
`-- lib
|       
`-- spec
|    |-- helper.js
|    |-- models
|    |   |-- postSpec.js
|    |   |-- userSpec.js
|    `-- acceptance
|        |-- loginSpec.js
|        |-- signupSpec.js
|        `-- postsSpec.js
|-- vendor
|    |-- javascripts
|    |   |-- jquery.js
|    |   |-- underscore.js
|    `-- stylesheets
|        `-- prettyPhoto.css
```


## Steps to add a new section and link
* Add to the app.js a input of a new controller
* Make the new controller in the controller folder
* In the controller make a list of all routes that this controller will handle.
* Make a view for each route that has need of a view.
* For a larger site you can create folder to seperate more organize them.


Borrowed From 
[lancejpollard](https://gist.github.com/lancejpollard/1398757)

## What is your folder-structure preference for a large-scale Node.js project?

### 0: Starting from Rails

This is the reference point.  All the other options are based off this.

```
|-- app
|   |-- controllers
|   |   |-- admin
|   |   |   |-- postsController.js
|   |   |   `-- usersController.js
|   |   |-- postsController.js
|   |   |-- sessionsController.js
|   |   `-- usersController.js
|   |-- models
|   |   |-- post.js
|   |   `-- user.js
|   |-- views
|   |   |-- admin
|   |   |   `-- posts
|   |   |       |-- edit.jade
|   |   |       |-- index.jade
|   |   |       |-- new.jade
|   |   |-- layouts
|   |   |   `-- application.jade
|   |   `-- posts
|   |       |-- index.jade
|   |       `-- show.jade
|   `-- helpers
|       |-- admin
|       |   |-- postsHelper.js
|       |   `-- tagsHelper.js
|       `-- postsHelper.js
`-- config
|    |-- application.js
|    |-- locale
|        `-- en.js
|    |-- routes.js
`-- lib
`-- spec
|    |-- helper.js
|    |-- models
|    |   |-- postSpec.js
|    |   |-- userSpec.js
|    `-- acceptance
|        |-- loginSpec.js
|        |-- signupSpec.js
|        `-- postsSpec.js
`-- vendor
|    |-- javascripts
|    |   |-- jquery.js
|    |   |-- underscore.js
|    `-- stylesheets
|        `-- prettyPhoto.css
```

### 1: Rails-like, with nested `/app` folders for client, mobile, etc.

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- browser
|       |-- controllers
|       |-- models
|       |-- views
|   `-- mobile
|       |-- controllers
|       |-- models
|       |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

Pros:

- lends itself great to progressive enhancement so-to-speak.  You start with just `/app`, and if your app starts growing, you add sub directories.
- doesn't pollute the top-level directories, which have a pretty uniform convention across apps.  However, people do add `/themes` to the top level, which is just about the same as adding `/client` to the top-level.

Cons:

- Now you have `/app/models` and `/app/browser`, etc., which isn't a totally clear naming convention -- `/app/models` is for a subset of code for the server, while `/app/browser` is a totally different app.  It's different than a namespace like `/app/models/admin` though, which makes sense.

My vote: no

### 2: A `/app/client` folder, similar to Rails' `/app/assets`

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- client
|       `-- browser
|           |-- controllers
|           |-- models
|           |-- views
|       `-- mobile
|           |-- controllers
|           |-- models
|           |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

Pros:

- The main reason you need these extra folders is for the different clients for the app.  So putting them in `/app/client` conceptually makes a lot of sense.  It's easy to reason about.
- Similar to Rails, which has `/app/assets/javascripts` instead of `/app/client`.  You don't want to start naming the folder `/app/assets` because, conceptually, everything is JavaScript, and calling one chunk of JavaScript "assets" and the rest "app" is conceptually jarring.

Cons:

- You have deeply nested folders for core code, which can be annoying.  `/app/client/browser/controllers/postsController.js` is 4 folders down.  But with TextMate and <kbd>CMD+T</kbd>, it shouldn't be an issue.

You could also have this structure if you only had 1 client (or just a default client):

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- client
|       |-- controllers
|       |-- models
|       `-- views
```

That's pretty clear, and it lends itself to agile development really well.

My vote: ✔

### 3: More top-level folders

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|-- browser
|   |-- controllers
|   |-- models
|   |-- views
|-- mobile
|   |-- controllers
|   |-- models
|   |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

Pros:

- Minimum folder nesting
- model/view/controller folders are all at the same level

Cons:

- Having multiple top-level folders, all of which are mvc code, is not conceptually clear.  They should be part of one directory (taking us back to #2).  Having every folder at the top level be a completely conceptually distinct part of the app (database vs. app vs. config vs. tests) is a clarifying convention.

My vote: second choice, but no

### 4: Namespaces inside `/app`

```
|-- app
|   `-- client
|       |-- controllers
|       |-- models
|       |-- views
|   `-- mobile
|       |-- controllers
|       |-- models
|       |-- views
|   `-- server
|       |-- controllers
|       |-- models
|       |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

Pros:

- Clear, normalized separation of concerns.  Everything fits into the same folder structure, instead of having the "default" stuff in `/app`, and then also nesting components in there.

Cons:

- For the simple case, you have to create a nested folder.
  - Counterargument: But, you're setup to easily add other clients for the app
- By not having the default code go in the top level `/app`, it's not as clear that `server` code can be used on the client (e.g. using `/app/server/models/user.js` on the client.  it makes sense if it's in `/app/models/user.js` however.).

My vote: no

### 5: Top-level `/client` and `/server` directories

This breaks convention, but it's an option.  Rename `/app` to `/server`

```
|-- client
|   |-- controllers
|   |-- models
|   |-- views
|-- server
|   |-- controllers
|   |-- models
|   |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

Pros:

- Clear: there is a client and server app.

Cons:

- If you had multiple client apps (browser, mobile, ipad, etc.), you'd end up doing things like #2 or #3.

My vote: no

