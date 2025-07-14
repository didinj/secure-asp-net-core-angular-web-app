import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Book } from './book/book';

export const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'book', component: Book },
];
