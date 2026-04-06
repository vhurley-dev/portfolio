# Architecture & Tech Stack

This is a Full-Stack Monorepo designed with a sibling folder structure to isolate the concerns of the Frontend and Backend environments.

## Frontend

- Framework: Angular 21 (Signals & Modern Control Flow)

- Environment: Node.js v22.x

- Deployment: Hosted on GitHub Pages (via the /docs directory)

## Backend

- Runtime: Node.js v20.x

- Framework: Express.js

- Database: MongoDB

- Deployment: Auto-deployed via Render

## Project structure

root/
├── client/ # Angular 21 Source (Node 22)
├── backend/ # Express API Source (Node 20)
└── docs/ # Production-ready Frontend Build

## Development setup

1. Backend (API)

- Navigate to the /backend folder: cd backend

- Ensure you are using Node 20.

- Run npm install followed by npm start.

- The server will run at http://localhost:3000.

2. Frontend (UI)

- Navigate to the /client folder: cd client

- Ensure you are using Node 22.

- Run npm install followed by npm start (or ng serve).

- The application will be available at http://localhost:4200.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
