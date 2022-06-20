import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {GenresComponent} from './components/genres/genres.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {MovieComponent} from './components/movie/movie.component';
import {MoviePagesComponent} from './components/movie-pages/movie-pages.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {PosterPreviewComponent} from './components/poster-preview/poster-preview.component';
import {SearchComponent} from './components/search/search.component';
import {GenresSortingComponent} from './components/genres-sorting/genres-sorting.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainInterceptor} from "./main.interceptor";
import { MoviesListComponent } from './components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HeaderComponent,
    HomeComponent,
    MovieDetailsComponent,
    MovieComponent,
    MoviePagesComponent,
    PaginationComponent,
    PosterPreviewComponent,
    SearchComponent,
    GenresSortingComponent,
    MainLayoutComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: MainInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
