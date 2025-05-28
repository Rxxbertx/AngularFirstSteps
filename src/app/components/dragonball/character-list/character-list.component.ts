import {Component, input, InputSignal, signal} from '@angular/core';
import type {Character} from '../../../interface/character.interface'

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {


  characters:InputSignal<Character[]> = input.required<Character[]>()

  listName:InputSignal<string> = input.required<string>();



}
