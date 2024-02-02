import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  book: any;
  isLoading = false;
  authors: string[] = [];

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) {
        this.getBookDetails(bookId);
      }
    });
  }

  getBookDetails(bookId: string): void {
    this.isLoading = true;
    this.bookService.getBookDetails(bookId).subscribe(
      bookDetails => {
        this.book = bookDetails;
        if (this.book.authors) {
          this.book.authors.forEach((author: any) => { // Explicitly type the "author" parameter as any[]
            this.bookService.getAuthorDetails(author.author.key.replace('/authors/', '')).subscribe(
              authorDetails => {
                this.authors.push(authorDetails.name);
              }
            );
          });
        }
        this.isLoading = false;
      },
      error => {
        console.error('Fehler beim Laden der Buchdetails', error);
        this.isLoading = false;
      }
    );
  }
}