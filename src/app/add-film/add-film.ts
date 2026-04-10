import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-film',
  imports: [FormsModule],
  templateUrl: './add-film.html',
  styleUrl: './add-film.css',
})
export class AddFilm implements OnInit {
  newFilm = new Film();

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {}

  addFilm() {
    this.filmService.ajouterFilm(this.newFilm);
  }
}
