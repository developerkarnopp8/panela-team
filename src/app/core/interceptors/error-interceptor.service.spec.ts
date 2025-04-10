// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';
// import { MatDialog } from '@angular/material/dialog';
// import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
// import { ErrorInterceptorService } from './error-interceptor.service';
// import { SnackbarErrorGlobalComponent } from 'src/app/features/modals/snackbar-error-global/snackbar-error-global.component';

// describe('ErrorInterceptorService', () => {
//   let httpMock: HttpTestingController;
//   let httpClient: HttpClient;
//   let matDialogSpy: { open: any; };

//   beforeEach(() => {
//     matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [
//         {
//           provide: HTTP_INTERCEPTORS,
//           useValue: ErrorInterceptorService,
//           multi: true
//         },
//         { provide: MatDialog, useValue: matDialogSpy }
//       ]
//     });

//     httpClient = TestBed.inject(HttpClient);
//     httpMock = TestBed.inject(HttpTestingController);
//   });
//   fdescribe('Deve testar o ERROR INTERCEPTOR', () => {
//     it('should open a success dialog on receiving a response with an accessToken', () => {
//       const dummyResponse = { accessToken: '12345' };
//       httpClient.get('/test').subscribe(response => {
//         expect(response).toEqual(dummyResponse);
//         expect(matDialogSpy.open).toHaveBeenCalledOnceWith(SnackbarErrorGlobalComponent, {
//           width: '400px',
//           data: { message: 'Bem vindo tchê!', type: 'success' }
//         });
//       });

//       const req = httpMock.expectOne('/test');
//       req.flush(dummyResponse);
//     });

//     it('should open an error dialog on HttpErrorResponse', () => {
//       const errorMessage = 'Failed to load data';
//       httpClient.get('/test').subscribe(
//         response => fail('should have failed with the 500 error'),
//         (error) => {
//           expect(error).toBeTruthy();
//           expect(matDialogSpy.open).toHaveBeenCalledOnceWith(SnackbarErrorGlobalComponent, {
//             width: '400px',
//             data: { message: errorMessage, type: 'error' }
//           });
//         }
//       );

//       const req = httpMock.expectOne('/test');
//       req.flush({ message: errorMessage }, { status: 500, statusText: 'Server Error' });
//     });
//   })
//   // Aqui você pode adicionar mais testes para outros cenários
// });
