import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './nesting/parent/parent.component';
import { ListFriendsComponent } from './friend/list-friends/list-friends.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
/* import { NgStyleComponent } from './ng-style/ng-style.component'; 
import { NgForComponent } from './ng-for/ng-for.component';*/
import { Eval1Component } from './eval-1/eval-1.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { LuneComponent } from './lune/lune.component';
/* import {RentpaComponent } from './input/rentpa/rentpa.component'; */



export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nesting', component: ParentComponent},
    {path: 'friend', component:  ListFriendsComponent},
    {path: 'data-binding', component: DataBindingComponent},
 /*    {path: 'ng-style', component: NgStyleComponent}, 
    {path: 'ng-for', component: NgForComponent},*/
    {path: 'eval-1', component: Eval1Component},
    {path: 'pokemon-list', component: PokemonListComponent},
    {path: 'lune', component: LuneComponent},
  /*   {path: 'input', component: RentpaComponent}, */
];
