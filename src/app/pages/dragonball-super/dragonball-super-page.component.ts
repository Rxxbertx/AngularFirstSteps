import {Component, inject, WritableSignal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';
import {DragonBallService} from '../../service/dragonball.service';
import {Character} from '../../interface/character.interface';


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


  /*//manera traditional para HACER DI
  constructor(private dataService:DragonBallService) {
  }*/

  //nueva manera de hacer DI en angular
  private dataService: DragonBallService = inject(DragonBallService);

  addCharacter(character: Character): void {

    this.dataService.addCharacter(character)

  }

  obtainCharacters(): WritableSignal<Character[]> {
    return this.dataService.characters;
  }
}
