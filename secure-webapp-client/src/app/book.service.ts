import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private api = 'https://localhost:5104/api/book';
  private _books = signal<Book[]>([]);

  constructor(private http: HttpClient, private router: Router) { }

  getBooks() {
    return this.http.get<Book[]>(this.api).pipe(
      tap(data => this._books.set(data))
    );
  }
}
