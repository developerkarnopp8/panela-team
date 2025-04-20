import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InviteStoreService {
  private inviteSubject = new BehaviorSubject<any[]>([]);
  public invite$ = this.inviteSubject.asObservable();

  constructor() {}

  setInviteEventos(eventos: any[]) {
    this.inviteSubject.next(eventos);
  }

  getInviteAtual(): any[] {
    return this.inviteSubject.getValue();
  }

  adicionarInviteEvento(inv: any) {
    const invite = this.getInviteAtual();
    this.inviteSubject.next([...invite, inv]);
  }


  limparEventos() {
    this.inviteSubject.next([]);
  }
}
