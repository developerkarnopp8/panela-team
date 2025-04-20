import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

import { environment } from '../../../environment/environments.invite'

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  //! Emite eventos de atualização
  private updateSubject = new Subject<void>();
  constructor(
    private http: HttpClient,
  ) {
    const currentUserStorage  = sessionStorage.getItem('token');
    this.currentUserSubject = new BehaviorSubject<any>(currentUserStorage ? JSON.parse(currentUserStorage) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getTokenStorage(){
    const currentToken  = sessionStorage.getItem('token');
    const token = currentToken ? JSON.parse(currentToken) : null;
    return token
  }

   //? GET ALL TODOS OS INVITES
  getInvite(): Observable<any> {
    const token = this.getTokenStorage();
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get<any>(`${environment.baseURL}${environment.basePath}`, { headers })
    .pipe(
      map(response => {
        this.currentUserSubject.next(response);
        return response;
      })
    );
  }

   //? POST CREATE NEW INVITE
  createdNewInvite(body: any,) : Observable<any>  {
    const token = this.getTokenStorage()
    const headers = { 'Authorization': `Bearer ${token}`}
    return this.http.post<any>(`${environment.baseURL}${environment.basePath}/invites`, body,{headers})
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        return user;
      }));
  }
}
