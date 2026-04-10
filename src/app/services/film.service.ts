import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[];
  film!: Film;

  constructor() {
    this.films = [
      { idFilm: 1, nomFilm: 'Inception', prixFilm: 30.6, dateCreation: new Date('01/14/2011') },
      { idFilm: 2, nomFilm: 'Interstellar', prixFilm: 45, dateCreation: new Date('12/17/2010') },
      { idFilm: 3, nomFilm: 'The Dark Knight', prixFilm: 90.123, dateCreation: new Date('02/20/2020') }
    ];
  }

  listeFilms(): Film[] {
    return this.films;
  }

  ajouterFilm(film: Film) {
    this.films.push(film);
  }

  supprimerFilm(film: Film) {
    const index = this.films.indexOf(film, 0);
    if (index > -1) {
      this.films.splice(index, 1);
    }
  }

  consulterFilm(id: number): Film {
    this.film = this.films.find((f) => f.idFilm == id)!;
    return this.film;
  }

  updateFilm(film: Film) {
    const index = this.films.indexOf(film, 0);
    if (index > -1) {
      this.films.splice(index, 1);
      this.films.splice(index, 0, film);
    }
  }
}
