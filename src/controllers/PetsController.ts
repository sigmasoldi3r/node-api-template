import PetFetching from '../actions/PetFetching';
import { Controller } from '../layers';
import { Get, HttpCode } from 'routing-controllers';

@Controller('/api/v1/pets')
export default class PetsController {
  constructor(readonly petFetching: PetFetching) {}

  @HttpCode(200)
  @Get('/')
  async _index() {
    return this.petFetching.fetchPets();
  }
}
