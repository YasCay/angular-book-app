import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  books = [
    {
      title: 'All About Love',
      author: 'bell hooks',
      description: 'O que é o amor, afinal? Será esta uma pergunta tão subjetiva, tão opaca? Para bell hooks, quando pulverizamos...',
      cover: 'https://covers.openlibrary.org/b/isbn/9780060959470-L.jpg',
    },
    {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      description: 'Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A...',
      cover: 'https://covers.openlibrary.org/b/isbn/9780553381689-L.jpg',
    },
    {
      title: 'Red, White & Royal Blue',
      author: 'Casey McQuiston',
      description: 'When his mother became President of the United States, Alex Claremont-Diaz was promptly cast as the American...',
      cover: 'https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg',
    },
  ];
}
