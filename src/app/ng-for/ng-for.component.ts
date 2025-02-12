import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* import { OneFriendNgmodelComponent } from '../one-friend-ngmodel/one-friend-ngmodel.component';

@Component({
  selector: 'app-list-friends-conditional-rendering',
  imports: [FormsModule,NgIf,OneFriendNgmodelComponent],
  templateUrl: './list-friends-conditional-rendering.component.html',
  styleUrl: './list-friends-conditional-rendering.component.css'
}) */
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
}