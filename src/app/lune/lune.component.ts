import { Component } from '@angular/core';
import { CocktailApi } from '../services/lune-api.service';
import { NgIf,NgFor } from '@angular/common';

interface Cocktail {
  id: number;
  name: string;
  image: string;
}
@Component({
  selector: 'app-lune',
  imports: [NgIf,NgFor],
  templateUrl: './lune.component.html',
  styleUrl: './lune.component.css',
  providers: [CocktailApi]
})
export class LuneComponent {
  /* cocktail: Cocktail[] = []; */
  isLoading: boolean = true;
  errorMessage: string = '';
  constructor(private CocktailApi:CocktailApi){}
  ngOnInit(): void {
    this.loadCocktail();
  }
  loadCocktail(): void {
    this.CocktailApi.fetchCocktailList().then((data) => {
        console.log('Data :' , data.results[0])  })}};
        /* this.cocktail = data.map((pokemon: any) => (
          // console.log(pokemon.name.fr),
          {
          id: pokemon.pokedex_id,
          name: pokemon.name.fr,
          image: pokemon.sprites.regular,
        }); */
        /* console.log(this.pokemons);
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
} */
/* 
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
  loadCocktail(): void {
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
 */

      


