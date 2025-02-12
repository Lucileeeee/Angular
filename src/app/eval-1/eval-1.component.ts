import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgStyle,NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eval-1',
  imports: [NgIf, NgFor,NgStyle,NgClass ],
  templateUrl: './eval-1.component.html',
  styleUrl: './eval-1.component.css'
})
export class Eval1Component {
  texteBouton:string = 'Afficher les Détails';
  bool: boolean= false;
  tab:string[]=[];
  superBool:boolean= true;
  backgroundColor :string= 'white';

  cliquerBouton(){
    console.log(this.tab.length);
    this.bool = !this.bool;
    this.tab.push('');
    this.texteBoutonDynamique();
    this.getColor();
  }
  texteBoutonDynamique(){
    return this.bool? this.texteBouton = "Masquer Les Détails": this.texteBouton = 'Afficher les Détails';
  }
  getColor(){
    if(this.tab.length > 5){
      this.superBool= false;
      this.backgroundColor ='lightBlue'; 
    } 
  }
}
