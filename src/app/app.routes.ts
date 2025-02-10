import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './nesting/parent/parent.component';
import { ListFriendsComponent } from './friend/list-friends/list-friends.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'nesting', component: ParentComponent},
    {path: 'friend', component:  ListFriendsComponent}
];
