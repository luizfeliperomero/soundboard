import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Group } from '../models/';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private readonly API = 'http://localhost:3000/Group';

  constructor(private http: HttpClient) {}

  getSound(): Observable<any> {
    return this.http.get<Group>(this.API);
  }
}
