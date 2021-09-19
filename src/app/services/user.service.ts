import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://randomuser.me/api';
  constructor(private http: HttpClient) {}

  getuser() {
    return this.http.get(this.url);
  }
}
