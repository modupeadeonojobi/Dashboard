import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = environment.url;

  suppressAlertError: boolean = false;


  constructor(private http: HttpClient) {
  }

  public get(actionUrl: any, options?: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    if (options) {
      return this.http.get<any>(url, options).pipe(
        map(response => {
          return response;
        }),
        // catchError(error => {
        //   return this.handleError(error);
        // })
      );
    }
    else {
      return this.http.get<any>(url).pipe(
        map(response => {
          return response;
        }),
        // catchError(error => {
        //   return this.handleError(error);
        // })
      );
    }
  }

  public post(actionUrl: any, request: any, options?: any): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    if (options) {
      return this.http.post<any>(url, request, options).pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          return this.handleError(error);
        })
      );
    }
    else {
      return this.http.post<any>(url, request).pipe(
        map(response => {
          return response;
        }),
        catchError(error => {
          return this.handleError(error);
        })
      );
    }
  }

  public get_(actionUrl: any): Observable<any> {
    return this.get(actionUrl); // , { headers: utility.allHeader }
  }

  public post_(actionUrl: any, request: any): Observable<any> {
    return this.post(actionUrl, request); // , { headers: utility.allHeader }
  }

  public delete_(actionUrl: any, id: number): Observable<any> {
    const url = this.SERVER_URL + actionUrl;
    return this.http.delete(url + '/' + id)
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(error => {
          return this.handleError(error);
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    if (this.suppressAlertError) {
      console.log(error);
      return throwError(error);
    }
    else {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  }
}
