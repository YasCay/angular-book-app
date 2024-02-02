import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  books: any[] = [];
  isLoading = false;

  constructor(private bookService: BookService) {}

  search(query: string): void {
    if (!query) return;

    this.isLoading = true;
    this.bookService.searchBooks(query).subscribe(
      books => {
        this.books = books;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
  }
}