import { Repository } from '../layers';
import Pet from '../model/Pet';

@Repository()
export default class PetsRepo {
  getPets() {
    return Pet.find();
  }
}
