import {Component, signal, WritableSignal} from '@angular/core';



type Character = {
  name: string;
  power: number;
  id: number;
}

@Component({
  selector:'app-dragonball-page',
  templateUrl:'./dragonball-page.component.html',
  styleUrl:'./dragonball-page.component.css',
  standalone: true
})
export class DragonballPageComponent{

  characters:WritableSignal<Character[]> = signal<Character[]>([

    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
    {id: 3, name: 'Piccolo', power: 3000},
  ]);

  name: WritableSignal<string> = signal<string>('Personaje');
  power: WritableSignal<number> = signal<number>(0);


  protected readonly String = String;
  protected readonly Number = Number;
}
