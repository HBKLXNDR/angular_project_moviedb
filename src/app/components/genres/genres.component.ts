import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IGenre} from "../../models";
import {MovieService, DataService} from "../../services";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenre[];


  constructor(private movieService: MovieService, private dataService: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe(({genres}) => {
      this.genres = genres;
      this.dataService.storage.next(genres)
    })
  }

  sortGenre(genre: IGenre): void {
    this.router.navigate([genre.id])
  }

}
