import { Routes } from '@angular/router';
import { AddFilm } from './add-film/add-film';
import { Films } from './films/films';
import { UpdateFilm } from './update-film/update-film';

export const routes: Routes = [
  { path: 'films', component: Films },
  { path: 'add-film', component: AddFilm },
  { path: 'updateFilm/:id', component: UpdateFilm },
  { path: '', redirectTo: 'films', pathMatch: 'full' },
];
