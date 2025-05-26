import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  standalone:true,
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent{

  counter:number = 0;
  counterSignal: WritableSignal<number> = signal(10);


  increaseBy(value:number){

    this.counter += value;
    this.counterSignal.update((currentValue:number) => currentValue + value);

  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }


}
