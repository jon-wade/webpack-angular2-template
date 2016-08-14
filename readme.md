#Angular2 Full-Stack TypeScript Template

A starter template for using Angular2 and TypeScript in a full-stack JS app, with full unit testing support.

##Includes

* Full TypeScript support on the front-end, compiled by WebPack.
* Scaffolding for an Angular2 app using RC5, including routing
* Full TypeScript support on the back-end, compiled using `tsc`
* Workflow controlled using NPM scripts
* Integration of Karma and Jasmine for front-end unit testing of ng2
* Inclusion of Mocha, Chai, Chai-Http and Mockery for back-end user testing

##Instructions

* Install using `npm install`.
* Fire up front-end dev environment with 'npm run frontend:start' in terminal window. This launches a development server on `http://localhost:8080` and watches front-end files store in the `./src/app` directory for changes, refreshing the browser automatically.
* Fire up the back-end compiler with `npm run backend:compile` in another terminal window. This launches the TypeScript compiler which watches `./src/server/*.ts` files, transpiling them to JavaScript into the `./src/server/js` directory.
* Then in a new terminal window `npm run backend:start` to launch the server-side Node app.
* Create all front-end build files with `npm run frontend:build`.
* To launch front-end unit tests use `npm run frontend:test`.
* To launch back-end unit tests use `npm run backend:test` (requires mocha installed globally).

##To be added

* Scaffold and support for MongoDB and Mongoose


