import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//? ENVIRONMENTS
import { environment } from '../../../environment/environments.auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient,
    private routes: Router,
  ) {
    const currentUserStorage  = localStorage.getItem('canvas');
    this.currentUserSubject = new BehaviorSubject<any>(currentUserStorage ? JSON.parse(currentUserStorage) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(dados: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}${environment.basePath}`, dados)
    .pipe(
      map(user => {
        localStorage.setItem('canvas', JSON.stringify(user.user));
        sessionStorage.setItem('token', JSON.stringify(user.access_token))
        this.currentUserSubject.next(user);
        if (this.routes.url !== '/eventos') {
          this.routes.navigate(['/eventos'], { replaceUrl: true });
          // this.routes.navigateByUrl('/eventos')
        }
        return user;
      }));
    }

    logout(): void {
      localStorage.removeItem('canvas');
      sessionStorage.removeItem('token');
      localStorage.removeItem('data_client');
      localStorage.removeItem('client_slid');
      localStorage.removeItem('data_profile');
      this.routes.navigate(['/iniciar'], { replaceUrl: true });
      // this.routes.navigateByUrl('/iniciar')
      this.currentUserSubject.next(null);
  }
}
