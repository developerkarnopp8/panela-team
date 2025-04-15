import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosInstanciaStoreService {
  private eventosSubject = new BehaviorSubject<any[]>([]);
    //! Emite eventos de atualização
  public instancias$ = this.eventosSubject.asObservable();
  public instanciasIsOpens$ = this.eventosSubject.asObservable();

  constructor() {}

  setEventosInstancia(instancias: any[]) {
    this.eventosSubject.next(instancias);
  }
  
  setIsOpen(instanciasIsOpens: boolean[]) {
    this.eventosSubject.next(instanciasIsOpens);
  }

  getEventosInstanciaAtual(): any[] {
    return this.eventosSubject.getValue();
  }

  getIsOpenAtual(): any[] {
    return this.eventosSubject.getValue();
  }

  adicionarEventoInstancia(instancia: any) {
    const instancias = this.getEventosInstanciaAtual();
    this.eventosSubject.next([...instancias, instancia]);
  }


  updateIsOpen(isOpen: boolean) {
    const instanciasIsOpens = this.getEventosInstanciaAtual();
    this.eventosSubject.next([...instanciasIsOpens, isOpen]);
  }

  limparEventosInstancia() {
    this.eventosSubject.next([]);
  }
}
