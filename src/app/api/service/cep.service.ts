import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CepProps } from './models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private Baseurl = 'https://viacep.com.br/ws'

  constructor(
    private http: HttpClient
  ) { }
  
  getCep(cep: string): Observable<CepProps> {
    try {
      return this.http.get<CepProps>(`${this.Baseurl}/${cep}/json`)
    } catch (error) {
      throw new Error(error);     
    }
  }

}
