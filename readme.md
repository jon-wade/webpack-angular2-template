#Angular2 Full-Stack TypeScript Template

A starter template for using Angular2 and TypeScript in a full-stack JS app.

##Includes

* Full TypeScript support on the front-end, compiled by WebPack and a scaffold for an Angular2 app, including routing
* Full TypeScript support on the back-end, compiled using `tsc`
* Workflow controlled using NPM scripts
* Integration of Karma and Jasmine for front-end unit testing of ng2
* Inclusion of Chai, Chai-Http and Mockery for back-end user testing

##Instructions

* Install using `npm install`
* Fire up front-end dev environment with 'npm run frontend' in terminal window. This launches as dev server on `http://localhost:8080` and watches front-end files for changes, refreshing the browser
* Fire up back-end dev environment with 'npm run backend' in another terminal window. This launches the TypeScript compiler which watches the `./src/server.ts` and `./src/server/*.ts` files, transpiling them to JavaScript.
* If required, run `nodemon ./src/server.js` in a third terminal window.
* Create all front-end build files with `npm run build`

##To be added

* Scaffold and support for MongoDB and Mongoose
* Creating production build files for back-end .ts files.

