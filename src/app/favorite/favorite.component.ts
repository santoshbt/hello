import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  } 
}
