import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

import { environment } from '../../../environment/environments.users'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersEventoService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  //! Emite eventos de atualização
  private updateSubject = new Subject<void>();
  constructor(
    private http: HttpClient,
    private routes: Router,
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

   //? GET ALL TODOS OS USER players PELO ID
  getUsersPlayers(eventId: any): Observable<any> {
    const token = this.getTokenStorage();
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get<any>(`${environment.baseURL}${environment.basePath}/event/${eventId}`, { headers })
    .pipe(
      map(response => {
        this.currentUserSubject.next(response);
        return response;
      })
    );
  }

  // //  //? GET ALL TODOS OS USER PELO ID
  // getUsersId(id: number): Observable<any> {
  //   const token = this.getTokenStorage();
  //   const headers = { 'Authorization': `Bearer ${token}` };
  //   return this.http.get<any>(`${environment.baseURL}${environment.basePath}${id}`, { headers })
  //   .pipe(
  //     map(response => {
  //       this.currentUserSubject.next(response);
  //       return response;
  //     })
  //   );
  // }

   //? POST ALL USERS lLEADER DO EVENTO
  createUserLeaderEvento(body: any) : Observable<any>  {
    const token = this.getTokenStorage()
    const headers = { 'Authorization': `Bearer ${token}`}
    return this.http.post<any>(`${environment.baseURL}${environment.basePath}/leader-with-event`, body,{headers})
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        if (this.routes.url !== '/login') {
          this.routes.navigate(['/login'], { replaceUrl: true });
        }
        return user;
      }));
  }

  //? POST ALL USERS PLAYER DO EVENTO
   createUserPlayersEvento(body: any) : Observable<any>  {
    console.log(body, 'body');
    return this.http.post<any>(`${environment.baseURL}${environment.basePath}`, body)
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        if (this.routes.url !== '/login') {
          this.routes.navigate(['/login'], { replaceUrl: true });
        }
        return user;
      }));
  }

  // //? PUT PARA ATUALIZAR OS DADOS DOS USERS
  // updateDataUser(body: any, userId: number) : Observable<any>  {
  //   const dados = body
  //   Object.assign(dados, {user_id: userId})
  //   const token = this.getTokenStorage()
  //   const headers = { 'Authorization': `Bearer ${token}`}
  //   return this.http.put<any>(`${environment.baseURL}${environment.basePath}`, dados,{headers})
  //   .pipe(
  //     map(user => {
  //       console.log(user, 'dataUser')
  //       this.currentUserSubject.next(user);
  //       return user;
  //     }));
  // }

  // getUpdateObservable(): Observable<void> {
  //   return this.updateSubject.asObservable();
  // }

  // emitUpdate() {
  //   this.updateSubject.next();
  // }
}
