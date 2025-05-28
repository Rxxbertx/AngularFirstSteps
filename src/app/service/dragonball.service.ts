import {effect, Injectable, signal, WritableSignal} from '@angular/core';
import {Character} from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class DragonBallService {

  //servicio que gestionara la data de los personajes

  characters: WritableSignal<Character[]> = signal<Character[]>(
    this.loadFromLocalStorage()
  );

  //el effecto lo que hace es saber el codigo que ejecuta dentro y si la senal que tiene dentro cambia, entonces se dispara
  saveToLocalStorage = effect(() => {

    localStorage.setItem('characters', JSON.stringify(this.characters())); //detecta esta senal cuando cambia

  });

  loadFromLocalStorage(): [] {
    const characters = localStorage.getItem('characters');

    if (characters && characters !== 'undefined') {
      return JSON.parse(characters);
    }
    return [];

  }

  addCharacter(character: Character): void {
    this.characters.update((actual) => [...actual, character]);
  }


}

//esto trabaja como dependency injection es decir va a ser singleton
