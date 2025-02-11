import { Component } from '@angular/core';
import { NgStyle,NgClass } from '@angular/common';

@Component({
  selector: 'app-one-friend-dynamic-styling',
  imports: [NgStyle,NgClass],
   templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class OneFriendDynamicStylingComponent {

  oneFriendId:number=99;
  oneFriendName:string="Steven Cigale";
  oneFriendAge:number=25;
  oneFriendStatus:string="Offline";
  oneFriendBio:string="Steven Cigale is a French film producer, screenwriter, and director. He is best known for his work in the 2000s and 2010s.";
  oneFriendImgUrl:string="https://picsum.photos/seed/picsum/150/150";
  oneFriendStyle:string='OFF';

  constructor() {
    this.oneFriendStyle = Math.random()>0.5?'ON':'OFF';
  }
  getOneFriendStatus():string{
    return this.oneFriendStatus;
  }
  getColor():string{
    return this.oneFriendStyle === 'ON' ? 'lightseagreen' : 'orangered'
  }
}

/* Rajoutez une variable oneFriendStyle initialisée à "OFF" (string) ou utilisez la variable oneFriendStatus (as U want)
dans le constructor utilisez un mathRandom pour assigner "ON" ou OFF" à oneFriendStyle si le mathRandom est < à 0.5)
rajoutez une méthode getColor dans laquelle on aura cette logique  : 
si oneFriendStyle est sur "OFF" on retourne une couleur au choix sinon on return une autre couleur au choix 
Sur la div du template one-friend via ngStyle Connectez la propriété CSS backgroundColor à ...  la methode getColor
Ensuite préparez 2 classes CSS
.amiOff et .amiOn

Sur la balise ou l'on affiche le nom du Friend : utilisez ngClass avec cette logique 
si oneFriendStyle est à "OFF" cela active la class amiOff 
si oneFriendStyle est à "ON" cela active la classe amiOn*/