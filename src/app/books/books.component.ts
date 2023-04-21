import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
name1:string = 'clean Code Book';
author1:string = 'Robert Good';
sourceLink1:string ="https://m.media-amazon.com/images/I/81xIDx6-nHL._AC_UY218_.jpg"

name2:string = 'Programatic Programmers';
author2:string = 'David Good';
sourceLink2:string ="https://m.media-amazon.com/images/I/71B4h-dSVzL._AC_UY218_.jpg"

isDisabled:boolean = false;
handleClick(){
  this.isDisabled = true;
}
}
