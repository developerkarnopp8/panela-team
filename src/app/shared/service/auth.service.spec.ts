import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { environment } from '../../../environment/environments.auth'

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should login and store the user token', () => {
    const mockUser = {
      token: '12345'
    };
    const loginData = { client_slid: 'abc', user_slid: 'xyz', password: 'pass' };

    service.login(loginData).subscribe(user => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.baseURL}${environment.basePath}`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);

    expect(localStorage.getItem('currentUserToken')).toBe(JSON.stringify(mockUser));
    expect(service.currentUserValue).toEqual(mockUser);
  });

  it('should clear user token on logout', () => {
    service.logout();
    expect(localStorage.getItem('currentUserToken')).toBeNull();
    expect(service.currentUserValue).toBeNull();
  });

});
