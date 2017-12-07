import { Component } from '@angular/core';
import { FavoriteAttrChange } from 'app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventAttr: FavoriteAttrChange){
    console.log("Favorite Changed ", eventAttr);
  }
  
}
