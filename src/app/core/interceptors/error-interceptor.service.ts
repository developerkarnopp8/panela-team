import { inject } from '@angular/core';
import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpErrorResponse, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarErrorGlobalComponent } from '../../features/modals/snackbar-error-global/snackbar-error-global.component';

export const ErrorInterceptorService: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const dialog = inject(MatDialog);

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event && event.body && event.body.accessToken) {
          openDialog(dialog, 'Bem vindo tchê!', 'success');
          close()
        }
        if (event && event.body && event.body.message === 'Successfuly saved!') {
          openDialog(dialog, 'Dados salvo!', 'success');
          close()
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        openDialog(dialog, error.error.message, 'error');
        close()
      } else {
        openDialog(dialog, `${error.error.message}`, 'error');
        close()
      }
      return throwError(() => error);
    })
  );
};

function openDialog(dialog: MatDialog, message: string, type: string): void {
  dialog.open(SnackbarErrorGlobalComponent, {
    width: '400px',
    data: { message, type }
  });
}
