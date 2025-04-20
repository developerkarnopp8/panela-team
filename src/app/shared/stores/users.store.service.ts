import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersPlayersStoreService {
  private eventosUserPlayersSubject = new BehaviorSubject<any[]>([]);
    //! Emite eventos de atualização
  public userPlayers$ = this.eventosUserPlayersSubject.asObservable();

  constructor() {}

  setUserPlayersEventos(eventos: any[]) {
    this.eventosUserPlayersSubject.next(eventos);
  }

  getUserPlayersEventosAtual(): any[] {
    return this.eventosUserPlayersSubject.getValue();
  }

  adicionarUserPlayersEvento(user: any) {
    const userPlayers = this.getUserPlayersEventosAtual();
    this.eventosUserPlayersSubject.next([...userPlayers, user]);
  }


  limparEventos() {
    this.eventosUserPlayersSubject.next([]);
  }
}
