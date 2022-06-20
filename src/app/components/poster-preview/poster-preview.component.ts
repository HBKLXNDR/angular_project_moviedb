import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
})
export class PosterPreviewComponent implements OnInit {

  @Input()
  poster: string;
  posterValue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
