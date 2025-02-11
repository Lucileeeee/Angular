import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
    id:number = 1;
    prenom:string =  'Laure';
    nom :string = 'Dubois'; 
    age:number = 12;
    ternaire :string = this.age > 30 ? 'cool' : 'ringuard';
    tabPassion:string[] = ['Piano', 'Jardinage', 'Bricolage'];
    url:string = 'https://picsum.photos/200/300';

  getAgeFriend():number{
    return this.age
  }
}

/* 
imaginez ≠ variables pour les informations d'un profil utilisateur que l'on va afficher dans le template

faites aussi une fonction qui retourne le status ou l'age, cette fonction sera executée directement dans le template 




Dans ONE-FRIEND : 
on va rajouter une variable qui sera une url d'une image 

faire un binding d'un certain attribut afin que l'image soit visible*/