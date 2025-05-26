import {Routes} from '@angular/router';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import {CounterPageComponent} from './pages/counter/counter-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }

];
