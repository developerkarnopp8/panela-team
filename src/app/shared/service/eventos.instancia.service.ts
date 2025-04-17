import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

import { environment } from '../../../environment/environments.evento.instancia'

@Injectable({
  providedIn: 'root'
})
export class EventosInstanciaService {
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

  //? GET ALL TODOS AS INSTANCIAS PELO ID DO EVENTO
  getInstanciaEventId(id: number): Observable<any> {
    const token = this.getTokenStorage();
    const headers = { 'Authorization': `Bearer ${token}` };
    return this.http.get<any>(`${environment.baseURL}${environment.patchEvent}/${id}/instances`, { headers })
    .pipe(
      map(response => {
        this.currentUserSubject.next(response);
        return response;
      })
    );
  }

  createdNewInstanciaGame(body: any, eventId: any) : Observable<any>  {
    const token = this.getTokenStorage()
    const headers = { 'Authorization': `Bearer ${token}`}
    return this.http.post<any>(`${environment.baseURL}${environment.patchEvent}/${eventId}/instances`, body, { headers })
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  //? PUT PARA ATUALIZAR OS DADOS DOS USERS
  updateDataEventoInstanciaAbertoOrClose(eventoId: number) : Observable<any>  {    
    const token = this.getTokenStorage()
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
    return this.http.patch<any>(`${environment.baseURL}${environment.basePath}/${eventoId}/open`, null, {headers})
    .pipe(
      map(user => {
        this.currentUserSubject.next(user);
        return user;
      }));
  }

}
