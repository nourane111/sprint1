import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-film.html',
  styles: ``,
})
export class UpdateFilm implements OnInit {
  currentFilm = new Film();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentFilm);
  }

  updateFilm() {
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }
}
