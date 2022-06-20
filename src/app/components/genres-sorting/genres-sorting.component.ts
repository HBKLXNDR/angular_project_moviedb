import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";


import {IGenre, IMovie} from "../../models";
import {DataService, MovieService} from "../../services";

@Component({
  selector: 'app-genres-sorting',
  templateUrl: './genres-sorting.component.html',
  styleUrls: ['./genres-sorting.component.css']
})
export class GenresSortingComponent implements OnInit {

  movies: IMovie[];
  genre: IGenre | undefined

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.activatedRoute.params.subscribe(value => {
        this.movieService.sortGenres(value['genre'], page || 1).subscribe(({results}) => {
          this.dataService.storage.subscribe(genres => {
            this.genre = genres.find(genre => genre.id === +value['genre'])
          })
          this.movies = results
        })
      })
    })
  }

}
