import { Action } from '../layers';
import PetsRepo from '../repositories/PetsRepo';

@Action()
export default class PetFetching {
  constructor(readonly petsRepo: PetsRepo) {}

  fetchPets() {
    return this.petsRepo.getPets();
  }
}
