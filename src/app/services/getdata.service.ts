import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  url = environment.url;

  constructor(private http: HttpClient) { }


  getStatus(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache' // Deshabilitar el caché del navegador
      })
    };
     
      return this.http.get(`${this.url}status.php`, httpOptions);
   }
  
  getLinks(): Observable<any> {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'Cache-Control': 'no-cache' // Deshabilitar el caché del navegador
        })
      };

      return this.http.get(`${this.url}links.php`, httpOptions);
  }
  
}
