import * as rc from 'routing-controllers';
import * as to from 'typeorm';
import Docs from './controllers/Docs';
import PetsController from './controllers/PetsController';
import Pet from './model/Pet';
import * as morgan from 'koa-morgan';

/**
 * Application bootstrap entity.
 */
export default class App {
  /**
   * OpenAPI/Swagger-like specification.
   */
  static spec?: unknown;

  /**
   * Entry point function.
   */
  static async main() {
    const app = rc.createKoaServer({
      controllers: [PetsController, Docs],
    });
    app.use(morgan('dev'));
    const dataSource = new to.DataSource({
      type: 'sqlite',
      database: 'pets.db',
      entities: [Pet],
      synchronize: true,
      logging: true,
    });
    dataSource.initialize().then(App.databaseReady);
    app.listen(8000, () => {
      console.log('Listening on port 8000');
    });
  }

  static databaseReady() {
    Pet.find().then(e => {
      if (e.length <= 0) {
        Pet.insert({ name: 'Parrot Jr.' });
      }
    });
  }
}
