import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/common/src/facade/async';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({newValue: this.isFavorite});
  } 
}

export interface FavoriteAttrChange{
  newValue: boolean
}
