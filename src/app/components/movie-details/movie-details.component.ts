import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../../services";
import {IGenre, IMovie} from "../../models";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: IMovie;
  genres: IGenre[];
  genresById: IGenre[];

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    let {data} = history.state;
    this.activatedRoute.params.subscribe(()=>{
      this.movieDetails = data
    })
    this.dataService.storage.subscribe(value => this.genres = value)

    let array = [] as IGenre[];
    for (let id of this.movieDetails.genre_ids){
      this.genres.map(genre=>{
        if (id === genre.id){
          array.push(genre)
        }
      })
      this.genresById = array
    }
  }

}
