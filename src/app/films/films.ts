import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  imports: [CommonModule, RouterLink],
  templateUrl: './films.html',
  styleUrl: './films.css',
})
export class Films implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService) {
    this.films = filmService.listeFilms();
  }

  ngOnInit(): void {}

  supprimerFilm(f: Film) {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.filmService.supprimerFilm(f);
    }
  }
}
