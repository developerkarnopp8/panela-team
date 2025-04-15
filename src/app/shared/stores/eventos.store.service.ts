import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosStoreService {
  private eventosSubject = new BehaviorSubject<any[]>([]);
    //! Emite eventos de atualização
  public eventos$ = this.eventosSubject.asObservable();
  public evento$ = this.eventosSubject.asObservable();

  constructor() {}

  setEventos(eventos: any[]) {
    this.eventosSubject.next(eventos);
  }

  setEventoSelect(evento: any) {
    this.eventosSubject.next(evento);
  }

  getEventosAtual(): any[] {
    return this.eventosSubject.getValue();
  }

  getEventoSelect(): any {
    return this.eventosSubject.getValue();
  }

  adicionarEvento(evento: any) {
    const eventos = this.getEventosAtual();
    this.eventosSubject.next([...eventos, evento]);
  }

  adicionarEventoSelect(evento: any) {
    const eventos = this.getEventoSelect();
    this.eventosSubject.next([...eventos, evento]);
  }

  limparEventos() {
    this.eventosSubject.next([]);
  }
}
