# Quotes

## Running this project

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The quotes API runs on port `3333` and this port needs to be free, or the server won't be able to start.

The dev server for the React page runs on port `1234` by default, but will use another if `1234` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm run server` to spin up the quotes API on `http://localhost:3333/api/quotes`.
- Run `npm start` to compile the React project and spin up the app on `http://localhost:1234`.
- Run `npm test` to run tests using Cypress.

## Notes:
For cypress to run tests (npm test) you need to have:
 - npm run server
 - npm start

  * You need both the front end AND back end to work before the tests can work.


## Q+A:
What is beforeEach()?
 - use for code you want to run before the tests run; necessary set up for tests to run. The code in the beforeEach() that you definitely need is the navigation to the application - otherwise, you cannot test it.

How do you make the application remember the objects in the array - even on refresh (instead of it resetting to the original array)?
 - b/c there is a back end - the inputtes quotes are being posted to the back end array. They then "live" in the same place so on a refresh, the state is grabbing all of the quotes.

 