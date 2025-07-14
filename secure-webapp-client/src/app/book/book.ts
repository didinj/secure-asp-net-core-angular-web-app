import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-book',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {
  get books() {
    return this.bookService.getBooks();
  }
  displayedColumns: string[] = ['bookId', 'isbn', 'title'];
  isLoadingResults = true;

  constructor(private bookService: BookService, private authService: AuthService, private router: Router) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
