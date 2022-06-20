import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./components/home/home.component";
import {MoviePagesComponent} from "./components/movie-pages/movie-pages.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {SearchComponent} from "./components/search/search.component";
import {GenresSortingComponent} from "./components/genres-sorting/genres-sorting.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MoviePagesComponent},
      {path: 'movie-details', component: MovieDetailsComponent},
      {path: 'search', component: SearchComponent},
      {path: ':genre', component: GenresSortingComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
