import {Injectable, signal, WritableSignal} from '@angular/core';
import {Character} from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class DragonBallService {

  //servicio que gestionara la data de los personajes

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
  ]);

  addCharacter(character: Character):void {
    this.characters.update((actual)=> [...actual, character]);
  }


}

//esto trabaja como dependency injection es decir va a ser singleton
