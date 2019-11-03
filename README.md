# Order Microbreweries - Server
This project is the server side of a full stack web-application.

## Table of contents
- [Intro](#Intro)
- [Technologies used](#Technologies-used)
- [Setup](#Setup)
- [API](#API)

## Intro
This is a node.js server, which was creadted for a technical assignment at an IT company in Netherlands.

The Front-end for the following repo may be found [here](https://github.com/TatyCris/order-microbreweries-client)

The Backend is deployed to heroku [here](
https://microbreweries.herokuapp.com)

## Technologies used
- Express
- Cors
- Nodemon

## Setup

- git clone
```bash
$ git clone https://github.com/TatyCris/connect-four-server.git
```

- npm install
```bash
$ npm install
```

- npm run start
```bash
$ npm run start
```

## API

ENDPOINTS:
\<base url\> is either http://localhost:4000 for local development or https://microbreweries.herokuapp.com for the deployed backend.

Get microbreweries:
- GET \<base url\>/microbreweries

Get beers:
- GET \<base url\>/beers
