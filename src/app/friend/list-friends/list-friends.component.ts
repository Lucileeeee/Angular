import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

/* NgIf
En reprenant la base de l'exo précedent 
Nous allons gérer le rendu conditionnel de la phrase 
de base on a une phrase qui dit "aucun Ami"
si on rempli l'input et que l'on click sur le bouton 
cela affiche une autre phrase 'ami ajouté' en reprenant le contenu de l'input */

@Component({
  selector: 'app-list-friends',
  imports: [OneFriendComponent, NgIf, NgFor],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})

/**
 * Composant représentant la liste des amis.
 */
export class ListFriendsComponent {
  listFriendsTab: { name: string; age: number; email: string }[] = [
    { name: 'Alice', age: 30, email: 'alice@example.com' },
    { name: 'Bob', age: 25, email: 'bob@example.com' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com' }
  ];

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
    this.ami = 'Ami Ajouter Avec Succès : ' + this.renduDynamique;
    console.log(this.listFriendsTab[0]);
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
} 
  // PRÉFÉRER NGMODEL!! https://angular.fr/forms/ng-model
 <textarea [(ngModel)]="avis" name="avis"></textarea>
export class FormComponent {
  nom: string = '';
  email: string = '';
  avis: string = '';

  onSubmit() {
    console.log(`Nom: ${this.nom}`);
    console.log(`Email: ${this.email}`);
    console.log(`Avis: ${this.avis}`);
    //Ici on peut envoyer les données à un service ou à une API
  }
}

 */


//PARTIE NG IF CORRECTION DE JEFF 

/* import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OneFriendNgmodelComponent } from '../one-friend-ngmodel/one-friend-ngmodel.component';

@Component({
  selector: 'app-list-friends-conditional-rendering',
  imports: [FormsModule,NgIf,OneFriendNgmodelComponent],
  templateUrl: './list-friends-conditional-rendering.component.html',
  styleUrl: './list-friends-conditional-rendering.component.css'
})
export class ListFriendsConditionalRenderingComponent {
  listFriendsCreated:boolean=false;
  listFriendsAuth:boolean=false;
  listFriendsDisplay:boolean=false;
  listFriendsCreationStatus:string="🥶 Aucun ami ..."
  listFriendsInputText:string=""
  constructor(){
    // setTimeout(() => {
    //   this.listFriendsAuth = true;
    // }, 10000);
  }

  onAddingFriends():void{
    this.listFriendsCreationStatus=`🥳 Votre ami (${this.listFriendsInputText}) a été ajouté !`;
    this.listFriendsCreated=!this.listFriendsCreated;
  }
  onUpdateFriendsList(eventInput:Event):void{
    console.log(eventInput);
    console.log((<HTMLInputElement>eventInput.target).value);
    this.listFriendsInputText = (<HTMLInputElement>eventInput.target).value;
  }
} */