import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CepProps } from './models/cep.model';
import { format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private Baseurl = 'http://localhost:3000'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }
  
  getAddress(): Observable<CepProps[]> {
    return this.http.get<CepProps[]>(`${this.Baseurl}/addresses`)
  }

  addToServer(address: CepProps): Observable<CepProps> {
    return this.http.post<CepProps>(`${this.Baseurl}/addresses`, {
      ...address,
      createdAt: format(new Date(), 'HH:mm dd/mm/yyyy')
    }, this.httpOptions)
  }

  removeFromServer(id: Number): Observable<any> {
    return this.http.delete(`${this.Baseurl}/addresses/${id}`)
  }

}
