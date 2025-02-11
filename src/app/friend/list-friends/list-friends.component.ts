import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

/**
 * Composant représentant la liste des amis.
 */
export class ListFriendsComponent {
  /**
   * Indique si la réputation est activée.
   * Initialement à false, elle passe à true après 3 secondes.
   *
   * @type {boolean}
   */
  reputation: boolean = false;
  /**
   * Texte dynamique lié à l'input utilisateur.
   *
   * @type {string}
   */
  renduDynamique: string = "";
  /**
   * Message indiquant l'état de l'ami.
   *
   * @type {string}
   */
  ami: string = 'Aucun Ami';
  /**
   * Crée une instance de ListFriendsComponent.
   * Après un délai de 3 secondes, la propriété 'reputation' est mise à true.
   */
  constructor() {
    setTimeout(() => {
      this.reputation = true;
    }, 3000);
  }
  /**
   * Met à jour le rendu dynamique avec la valeur saisie par l'utilisateur.
   *
   * @param {any} eventInput - L'événement émis lors de la saisie dans l'input.
   * @returns {void}
   */
  onUpdateFriendsList(eventInput: any): void {
    this.renduDynamique = eventInput.target.value;
  }
  /**
   * Met à jour la propriété 'ami' pour indiquer qu'un ami a été ajouté avec succès.
   *
   * @returns {void}
   */
  ajouterAmi(): void {
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


// PARTIE CORRECTION DE JEFF : 

/* import { Component } from '@angular/core';
import { OneFriendEventBindingComponent } from '../one-friend-event-binding/one-friend-event-binding.component';
import { OneFriendDynamicStylingComponent } from "../one-friend-dynamic-styling/one-friend-dynamic-styling.component";
@Component({
  selector: 'app-list-friends-event-binding',
  imports: [OneFriendEventBindingComponent],
  // imports: [OneFriendEventBindingComponent, OneFriendDynamicStylingComponent],
  templateUrl: './list-friends-event-binding.component.html',
  styleUrl: './list-friends-event-binding.component.css'
})
export class ListFriendsEventBindingComponent {
  listFriendsAuth:boolean=false;
  listFriendsCreationStatus:string="🥶 Aucun ami ..."
  listFriendsInputText:string=""
  constructor(){
    // setTimeout(() => {
    //   this.listFriendsAuth = true;
    // }, 10000);
  }

  onAddingFriends():void{
    this.listFriendsCreationStatus="🥳 Votre ami a été ajouté !"
  }
  onUpdateFriendsList(eventInput:any):void{
    console.log(eventInput);
    console.log(eventInput.target.value);
    // console.log((<HTMLInputElement>eventInput.target).value);
    this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
    //! autre syntaxe de typage avec as
    // this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;

  }
} */