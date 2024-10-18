import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 1000000000000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 900000000000
  },
  {
    id: uuid(),
    name: 'Trunks',
    power: 800000000000
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 700000000000
  }];

  addCharacter (character:Character):void {

    const newCharacter:Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }
  /*onDeleteCharacter (index: number){
    this.characters.splice(index, 1);
  }*/

    deleteCharacterById (id: string){
      this.characters = this.characters.filter(character => character.id !== id);
    }

}
