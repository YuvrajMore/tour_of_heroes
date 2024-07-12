import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HeroesComponent }
    ])
  ]
})
export class HeroesModule { }