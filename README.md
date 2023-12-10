<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


# Toilet API Server

Welcome to the Toilet API Server built with Nest.js! This server provides endpoints to manage information about public toilets.

## Table of Contents
- [Endpoints](#endpoints)
  - [Get All Toilets](#get-all-toilets)
  - [Get Toilet by ID](#get-toilet-by-id)
  - [Create Toilet](#create-toilet)
  - [Update Favorite Status](#update-favorite-status)
  - [Remove Toilet](#remove-toilet)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [Usage](#usage)
- [Dataset Source](#dataset-source)
- [API Server Hosting](#api-server-hosting)
- [Contributing](#contributing)
- [License](#license)

## Endpoints

### Get All Toilets

Retrieve a list of all toilets.

- **URL**: `/toilettes`
- **Method**: `GET`
- **Query Parameters**:
  - `favorites` (optional): Filter by favorite status (0 for non-favorites, 1 for favorites).
- **Response**: Array of Toilette objects.

### Get Toilet by ID

Retrieve details of a specific toilet by ID.

- **URL**: `/toilettes/:id`
- **Method**: `GET`
- **Path Parameters**:
  - `id`: ID of the toilet.
- **Response**: Toilette object.

### Create Toilet

Create a new toilet entry.

- **URL**: `/toilettes`
- **Method**: `POST`
- **Body**: Toilette object.
- **Response**: Details of the created toilet.

### Update Favorite Status

Update the favorite status of a toilet.

- **URL**: `/toilettes/:id`
- **Method**: `PUT`
- **Path Parameters**:
  - `id`: ID of the toilet.
- **Response**: Updated details of the toilet.

### Remove Toilet

Remove a toilet entry by ID.

- **URL**: `/toilettes/:id`
- **Method**: `DELETE`
- **Path Parameters**:
  - `id`: ID of the toilet.
- **Response**: Success message.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Usage

Make HTTP requests to the defined endpoints to interact with the Toilet API.

## Services

### Toilet Service

The `ToiletService` is responsible for managing toilet data. It includes functions to fetch toilet information from an external API, store toilet data locally, and provide various functionalities related to toilets.

#### Methods:

- `onModuleInit`: Function that runs when the module is initialized.
- `fetchToilettesFromServer`: Function to fetch toilettes from the server (API).
- `addToilette`: Function to add a toilet to the storage.
- `getAllToilettes`: Get all toilettes that return all the toilets in the current storage.
- `getToilet`: Get a toilette by its id.
- `updateFavorite`: Add a toilette to favorites.
- `remove`: Remove a toilette from the storage.
- `searchByCommune`: Search a toilette by its commune.
- `getFavorites`: Get all the favorites toilettes.

### External Dependencies

- `HttpService`: Nest.js HTTP service used for making HTTP requests.
- `firstValueFrom`, `map`, `tap`: RxJS operators for handling asynchronous operations.

## Dataset Source

The toilet data is sourced from the [OpenDataSoft dataset](https://data.opendatasoft.com/explore/dataset/fr-toilettes-publiques%40ampmetropole/table/).

## API Server Hosting

The API server is hosted on Clever Cloud under the application name "toiletmergency-server." You can access the deployed server at [https://toiletmergency.cleverapps.io/](https://toiletmergency.cleverapps.io/).

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
