import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Sound } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private readonly API = 'http://localhost:3000/Sound';

  constructor(private http: HttpClient) {}

  getSound(): Observable<any> {
    return this.http.get<Sound[]>(this.API);
  }

}
