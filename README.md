# MERN
Latest technology POC repo - MERN stack for now, build on it later

# Requirements
* ***Node >= 8.10***
* ***NPM >= 5.6_***
* ***MongoDB Installed***

# Frontend
* Project created with **npx create-react-app** command [Create react app](https://reactjs.org/docs/create-a-new-react-app.html). Includes - *react*, *react-dom*, *Webpack*, *Babel*, *ESLint*, *JSX*, *ES6*, *Typescript*, *Flow syntax*, *Unit test runner*, *Coverage report*, *Dev server*, *Build script for JS, CSS and images*, *Service worker*
* To run application - `npm start`
* Currently using [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but can use [Axios](https://github.com/axios/axios)

# Server
* Using [**mongoose**](https://mongoosejs.com/) - mongodb object modeling
* Using [**dotenv**](https://www.npmjs.com/package/dotenv) to load environments

# Database
* Using **mongodb local database instance**
  - Need to install [**MongoDB**](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) in you machine
  - Using [**MongoDB driver**](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/) for NodeJS
  - Install **MongoDB Compass** for GUI connection (comes as an option in MongoDB installer)
* To start a **mongod process** use - `mongod --dbpath=<Database_Directory>` (mongod process has to be running to connect mongo shell to MongoDB)
* To run **mongo shell** - `mongo`
  - default port is 27017
  - mongo shell is included as part of MongoDB server installer
  - mongodb installation folder should be added to PATH env variable to run with mongo command
* Complete [**Mongo Shell**](https://docs.mongodb.com/manual/mongo/) documentation
* To start MongoDB service use - `<Installation_Path>\mongodb.exe --dbpath="<Database_Directory>"`

* Alternately, use [**mongoDB Atlas**](https://www.mongodb.com/cloud/atlas) - Cloud based DB server (Cluster from AWS. ther options are GCP and Azure)
  - Can use the same DB in the cluster or you can create your own DB
  - To use this port 27017 port must be opened from the system

# Further development
* Routing in react
* [**Redux State Container**](https://redux.js.org/) using [**react-redux**](https://react-redux.js.org/introduction/quick-start)
* [**Redux observables**](https://redux-observable.js.org/)
* Currently using [**fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) but can use [**Axios**](https://github.com/axios/axios)
* Implement async-await in FE

# Best practices, Tips, Tricks, Further Reads
* [**mongoDB Compass**](https://docs.mongodb.com/compass/current/) - GUI for mongoDB
* [**Security guidelines**](https://docs.mongodb.com/manual/administration/security-checklist/) for MongoDB
* Use [**Nodemon**](https://www.npmjs.com/package/nodemon) to automatically restart server with changes
* Use [**Concurrently**](https://www.npmjs.com/package/concurrently) to run multiple commands concurrently
* [**The Twelve-Factor App**](https://12factor.net/)
* [**Atomic design**](https://bradfrost.com/blog/post/atomic-web-design/)

# Future & misc
* Come up with best practices, code structure
* **Docker Compose** to containerize and run all applications
* [**Expo CLI**](https://expo.io/) for cross platform application builds (with React Native and CircleCI)
* [**mongoDB Stitch**](https://www.mongodb.com/cloud/stitch) for serverless MongoDB platform
* [**MongoDB Charts**](https://docs.mongodb.com/charts/master/) for data visualization