import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';


@Component({

  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.component.html'

})
export class HeroPageComponent {

  name: WritableSignal<string> = signal('Ironman');
  age: WritableSignal<number> = signal(45);

  heroDescription: Signal<string> = computed((): string => {

    return `${this.name()} - ${this.age()}`;

  })

  /*capitalizedName:Signal<string> = computed(()=>{
    return this.name().toUpperCase()
  })*/


  changeHero() {
    this.name.update((actualName: string): string =>
      actualName = 'Spiderman'
    )
    this.age.update((actualAge: number): number => actualAge = 22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }


}

