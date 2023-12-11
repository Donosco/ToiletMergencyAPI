<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://f-droid.org/repo/org.woheller69.lavatories/en-US/icon_Ivd-E0kQp51JAAR2ldnvcDqlhOA8D50kun4q1qC3-g8=.png" width="200" alt="Nest Logo" /></a>
</p>

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
  - `favorites` (optional): Filter by favorite status (any for all records, 1 for favorites).
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

The API server is hosted on Clever Cloud under the application name "toiletmergency-server." You can access the deployed server at [https://toiletmergency.cleverapps.io/](https://toiletmergency.cleverapps.io/toilettes).

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.


- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
