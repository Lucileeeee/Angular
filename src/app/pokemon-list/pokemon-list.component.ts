import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgIf,NgFor } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemon-list',
  imports: [NgIf,NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  providers: [PokemonService] // injection de service dans le composant
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  constructor(private pokemonService: PokemonService) {}
  //On execute dans ngOnit du composant pour charger la liste des pokemons dès le départ (lifeCycle hook)
  ngOnInit(): void {
    this.loadPokemons();
  }
  // Méthode pour charger la liste des pokemons (dans le composant)
  // Cela utilise fetchPokemonList du service PokemonService
  loadPokemons(): void {
    this.pokemonService
      .fetchPokemonList()
      .then((data) => {
        // console.log(data);
        this.pokemons = data.map((pokemon: any) => (
          // console.log(pokemon.name.fr),
          {
          id: pokemon.pokedex_id,
          name: pokemon.name.fr,
          image: pokemon.sprites.regular,
        }));
        console.log(this.pokemons);
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}
