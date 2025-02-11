import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

export class ListFriendsComponent {
  reputation :boolean = false;
  constructor(){
    setTimeout(() => {
      this.reputation = true;
    }, 3000);
  }
  p : string = "";
  ami :string = 'Aucun Ami';

  onUpdateFriendsList(eventInput:any):void{
    console.log(eventInput);
    console.log(eventInput.target.value);
    this.p = eventInput.target.value;
  }
  ajouterAmi(){
    this.ami = 'Ami Ajouter Avec Succès';
  }
}


/* Dans le composant List-Friends: 

Rajouter un Input texte : 
En captant l'event il faudra afficher ce qui est tapé dans l'input, dans un <p>

Rajouter : un variable 
qui affiche "Aucun ami"

Rajouter un bouton  : 
Quand on click sur le bouton cela change le texte de la variable en "Ami ajouté" 
On affiche ce qui est tapé dans l'input en passant par l'event */
