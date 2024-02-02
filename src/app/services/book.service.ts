import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl: string = '/api';

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any[]> {
    const searchUrl = `${this.baseUrl}/search.json?q=${encodeURIComponent(query)}`;
    return this.http.get<{ docs: any[] }>(searchUrl).pipe(
      map(response => response.docs)
    );
  }

  getBookDetails(bookId: string): Observable<any> {
    const formattedBookId = bookId.replace('/works/', '');
    const detailsUrl = `${this.baseUrl}/works/${encodeURIComponent(formattedBookId)}.json`;
    return this.http.get(detailsUrl);
  }

  getAuthorDetails(authorId: string): Observable<any> {
    const authorUrl = `${this.baseUrl}/authors/${encodeURIComponent(authorId)}.json`;
    return this.http.get(authorUrl);
  }
}