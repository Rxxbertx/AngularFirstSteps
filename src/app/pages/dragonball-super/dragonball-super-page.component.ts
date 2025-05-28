import {Component, signal, WritableSignal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {Character} from '../../interface/character.interface';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';


@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  standalone: true
})
export class DragonballSuperPageComponent {

  characters: WritableSignal<Character[]> = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
  ]);

  addCharacter(character: Character):void {
    this.characters.update((actual)=> [...actual, character]);
  }

}
