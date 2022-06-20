import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenresBadge, IMovie, IPackage} from "../models";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(page: number = 1): Observable<IPackage> {
    return this.httpClient.get<IPackage>(urls.movies, {params: {page}})
  }

  getMovieById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`)
  }

  getGenre(): Observable<IGenresBadge> {
    return this.httpClient.get<IGenresBadge>(urls.genres)
  }

  sortGenres(id: number, page: number = 1): Observable<IPackage> {
    return this.httpClient.get<IPackage>(`${urls.movies}?with_genres=${id}`, {params: {page}})
  }

  search(params: string, page: number = 1): Observable<IPackage> {
    return this.httpClient.get<IPackage>(`${urls.search}${params}`, {params: {page}})
  }


}

