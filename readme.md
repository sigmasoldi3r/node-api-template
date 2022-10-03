# Routing Seed

Routing controllers project seed.

## Development

To develop this app just run:
```sh
yarn start
```

Then to get started visit `http://localhost:8000/api/v1/pets`

This will run the app and **reload** each time a file
is changed.

## Deployment

To deploy the app run:
```sh
yarn build
```

To test the compiled app, you can use:
```sh
yarn start
```

Check out the `dist` directory for deployment in each environment.

You should automate the copy of the bundle file.

## Seed Contents

This seed project contains some items, as mocks to show the structure:

- Actions
- Controllers
- The app
- Layers

The **actions** folder contains a sample action, dispatched by the
sample controller.

**Controllers** contains two controllers, where `Hello.ts` is a mock
controller, just for showing the use case, and `Docs.ts`, which exposes
the real _Swagger 2.0_ specification JSON.

### Changing the database

To change the DBMS, remove the package for _Sqlite3_ by `yarn remove sqlite3`,
then install your own and tweak the `App.ts` file.
