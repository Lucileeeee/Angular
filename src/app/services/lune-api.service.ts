import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class CocktailApi {
  private apiUrl = 'https://randomuser.me/api/';
  async fetchCocktailList(): Promise<any> {
    const response = await fetch(this.apiUrl);
    console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch Cocktail list');
    }
    return response.json();
  }
}