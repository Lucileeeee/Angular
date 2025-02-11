import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * Composant démontrant la liaison de données (data binding) avec Angular.
 *
 * Ce composant utilise le module FormsModule pour gérer la liaison bidirectionnelle
 * entre un champ de saisie et la propriété `input_value`. Il inclut également une méthode
 * pour réinitialiser la valeur de l'input.
 *
 * @component
 */
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  /**
   * Stocke la valeur saisie dans le champ d'entrée.
   *
   * @type {string}
   */
  input_value: string = '';
  /**
   * Réinitialise la valeur de l'input en la mettant à une chaîne vide.
   *
   * Cette méthode peut être appelée, par exemple, lors d'un clic sur un bouton
   * pour vider le champ de saisie.
   *
   * @returns {void}
   */
  resetInput():void{
    this.input_value = '';
  }
}


/* Dans un composant 
un input est pré rempli
on affiche le contenu de l'input dans la page (cela se met à jour en temps réél)
Un btn permet de reset l'input
Si on a rien d'écrit, le btn est désactivé */