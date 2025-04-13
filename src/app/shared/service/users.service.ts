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

  //  //? GET ALL TODOS OS USER PELO ID
  // getUsers(): Observable<any> {
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

   //? POST ALL USERS ID OF CLIENT
  createUserLeaderEvento(body: any) : Observable<any>  {
    const token = this.getTokenStorage()
    const headers = { 'Authorization': `Bearer ${token}`}
    console.log(body, 'body');
    return this.http.post<any>(`${environment.baseURL}${environment.basePath}/leader-with-event`, body,{headers})
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        if (this.routes.url !== '/login') {
          this.routes.navigate(['/login'], { replaceUrl: true });
        }

        // localStorage.setItem('canvas', JSON.stringify(user.user));
        // sessionStorage.setItem('token', JSON.stringify(user.access_token))
        // this.currentUserSubject.next(user);
        // if (this.routes.url !== '/eventos') {
        //   this.routes.navigate(['/eventos'], { replaceUrl: true });
        // }
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
