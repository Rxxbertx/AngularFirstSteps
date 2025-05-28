import {Component, output, OutputEmitterRef, signal, WritableSignal} from '@angular/core';
import {Character} from '../../../interface/character.interface';

@Component({
  selector: "dragonball-character-add",
  templateUrl: "./character-add.component.html",
})
export class CharacterAddComponent {

  name: WritableSignal<string> = signal<string>('');
  power: WritableSignal<number> = signal<number>(0);

  newCharacter:OutputEmitterRef<Character> = output()


  protected readonly Number = Number;

  addCharacter(): void {

    if (!this.name() || !this.power() || this.power() <= 100) {
      return;
    }
    const newCharacter: Character = {

      name: this.name(),
      power: this.power(),
      id:  Math.floor(Math.random()*1000),

    }

    this.newCharacter.emit(newCharacter)
    this.reset();


  }

  reset(): void {
    this.name.set('');
    this.power.set(0);
  }
}
