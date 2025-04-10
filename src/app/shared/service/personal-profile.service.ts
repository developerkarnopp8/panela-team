import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { environment } from '../../../environment/environments.personal-profile'

@Injectable({
  providedIn: 'root'
})
export class PersonalProfileService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(
    private http: HttpClient,
  ) {
    const currentUserStorage  = localStorage.getItem('currentUserToken');
    this.currentUserSubject = new BehaviorSubject<any>(currentUserStorage ? JSON.parse(currentUserStorage) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getTokenStorage(){
    const currentToken  = localStorage.getItem('currentUserToken');
    const token = currentToken ? JSON.parse(currentToken) : null
    const tokken = token.accessToken
    return tokken
  }

  //  //? GET DADOS DO PERFIL DO ADM
  // getPersonalProfile(): Observable<any> {
  //   const token = this.getTokenStorage();
  //   const headers = { 'Authorization': `Bearer ${token}` };
  //   return this.http.get<any>(`${environment.baseURL}${environment.basePath}`, { headers })
  //   .pipe(
  //     map(response => {
  //       this.currentUserSubject.next(response);
  //       return response;
  //     })
  //   );
  // }
}
