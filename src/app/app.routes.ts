import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './nesting/parent/parent.component';
import { ListFriendsComponent } from './friend/list-friends/list-friends.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
/* import { NgStyleComponent } from './ng-style/ng-style.component'; */
import { NgForComponent } from './ng-for/ng-for.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nesting', component: ParentComponent},
    {path: 'friend', component:  ListFriendsComponent},
    {path: 'data-binding', component: DataBindingComponent},
 /*    {path: 'ng-style', component: NgStyleComponent}, */
    {path: 'ng-for', component: NgForComponent},
];
