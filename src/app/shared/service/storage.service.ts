import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageSub = new BehaviorSubject<{ key: string, value: any } | null>(null);

  watchStorage() {
    return this.storageSub.asObservable();
  }

  setItem(key: string, value: any) {
    const currentValue = this.getItem(key);
    //? Verifica se o valor atual é diferente do valor que está sendo passado e não entrar em um loop infinito
    if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
      localStorage.setItem(key, JSON.stringify(value));
      this.storageSub.next({ key, value });
    }
  }
  setItemSession(key: string, value: any) {
    const currentValue = this.getItem(key);
    //? Verifica se o valor atual é diferente do valor que está sendo passado e não entrar em um loop infinito
    if (JSON.stringify(currentValue) !== JSON.stringify(value)) {
      sessionStorage.setItem(key, JSON.stringify(value));
      this.storageSub.next({ key, value });
    }
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  getItemSession(key: string) {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string) {
    const currentValue = this.getItem(key);
    if (currentValue !== null) {
      localStorage.removeItem(key);
      this.storageSub.next({ key, value: null });
    }
  }

  removeItemSession(key: string) {
    const currentValue = this.getItem(key);
    if (currentValue !== null) {
      sessionStorage.removeItem(key);
      this.storageSub.next({ key, value: null });
    }
  }
}
