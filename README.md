# MERN
Latest technology POC repo - MERN stack for now, build on it later

# Requirements
* ***Node >= 8.10***
* ***NPM >= 5.6_***
* ***MongoDB Installed***

# Technologies and Tools
* **Frontend** - *ReactJS, React Bootstrap*
* **Server** - *Node, Express, Mongoose*
* **Database** - *MongoDB (Alt: Cloud based Atlas/Stitch)*
* **App management** - *CircleCI(Alt: Azure), Heroku(Alt: OpenShift, OpenStack, CloudFoundry, Azure, AWS)*

**To run entire application (Client, Server, Local DB instance) - *`npm run develop`***
  - Have to be inside client project directory
  - Need to have concurrently installed (included as dev dependency for client app)
  - Need to have nodemon installed (included as dev dependency for server app)
  - Need to have MongoDB with the installation directory in PATH environment variable
  - Default database directory is *`C:\Database\MongoDB`*. Default port is 27017

# Frontend
* Project created with **`npx create-react-app`** command from [**Create react app**](https://reactjs.org/docs/create-a-new-react-app.html). Includes - *react, react-dom, Webpack, Babel, ESLint, JSX, ES6, Typescript, Flow syntax, Unit test runner, Coverage report, Dev server, Build script for JS, CSS and images, Service worker*
* Currently using [**fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but can use [**Axios**](https://github.com/axios/axios)
* To run application - **`npm start`** or **`npm run client`**

# Server
* Using [**mongoose**](https://mongoosejs.com/)
* Using [**dotenv**](https://www.npmjs.com/package/dotenv) to load environments
* To run application - **`npm run server`**. If no nodemon installed - **`npm start`**

# Database
* Using **mongodb local database instance**
  - Install [**MongoDB**](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) in you machine
  - Install **MongoDB driver**
    - Comes preinstalled with **mongoose**
    - [**Native driver**](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)
  - Install [**MongoDB Compass**](https://www.mongodb.com/products/compass) for GUI connection
* Start a **mongod process** use - **`mongod --dbpath=<Database_Directory>`**
  - mongod process has to be running to connect mongo shell to MongoDB
  - MongoDB installation path should be added to PATH env variable to run with mongod command from anywhere or you have to be in the installation folder in cmd
* Run **mongo shell** - **`mongo`**
  - default port is 27017
  - mongo shell is included as part of MongoDB server installer
  - MongoDB installation path should be added to PATH env variable to run with mongo command or you have to be in the installation folder in cmd
  - Complete [**Mongo Shell**](https://docs.mongodb.com/manual/mongo/) documentation

* Alternately, use [**mongoDB Atlas**](https://www.mongodb.com/cloud/atlas) (previously mLab) - Cloud based DB server
  - This takes care of all the security measures
  - To use this port 27017 port must be opened from your system

# Next steps
* Authentication and authorization
  - [**Blog 1**](https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122)
  - [**Blog 2**](https://medium.com/quick-code/handling-authentication-and-authorization-with-node-7f9548fedde8)
* ES6 in Node server application
* Declarative routing in react with [**react-router**](https://www.npmjs.com/package/react-router)
* [**Redux State Container**](https://redux.js.org/) using [**react-redux**](https://react-redux.js.org/introduction/quick-start)
* [**ReactiveX**](http://reactivex.io/) with [**Redux observables**](https://redux-observable.js.org/) or [**rxjs**](https://rxjs-dev.firebaseapp.com/)
* Currently using [**fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but can use [**Axios**](https://github.com/axios/axios)
* Implement async-await in FE
* Use a UI framework
  - [**Prime React**](https://www.primefaces.org/primereact/#/)
  - [**React Bootstrap**](https://react-bootstrap.github.io/)

# Best practices, Tips, Tricks, Further Reads
* [**Security guidelines**](https://docs.mongodb.com/manual/administration/security-checklist/) for MongoDB
* Install [**Nodemon**](https://www.npmjs.com/package/nodemon) to automatically restart server with changes
* Install [**Concurrently**](https://www.npmjs.com/package/concurrently) to run multiple commands concurrently
* **Thinking in react**
  - [**Thinking in react**](https://reactjs.org/docs/thinking-in-react.html)
  - [**What & Why JSX**](https://reactjs.org/docs/introducing-jsx.html)
  - [**React rethinking**](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
  - [**Composition over inheritence**](https://reactjs.org/docs/composition-vs-inheritance.html)
* **React with Typescript**
  - [**Start project with typescript**](https://create-react-app.dev/docs/adding-typescript/)
  - [**Wire up typescript with react**](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
* [**The Twelve-Factor App**](https://12factor.net/)
* [**Atomic design**](https://bradfrost.com/blog/post/atomic-web-design/)

# Future & misc
* Come up with best practices, code structure
* Static and server rendered pages with [**Next.js**](https://nextjs.org/learn/basics/getting-started)
* [**postgresql**](https://www.postgresql.org/docs/)
* [**Docker Compose**](https://docs.docker.com/compose/) to containerize and run all applications
* [**Expo CLI**](https://expo.io/) for cross platform application builds (with React Native and CircleCI)
* [**mongoDB Stitch**](https://www.mongodb.com/cloud/stitch) for serverless MongoDB platform
* [**MongoDB Charts**](https://docs.mongodb.com/charts/master/) for data visualization