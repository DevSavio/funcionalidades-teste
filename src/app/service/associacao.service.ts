import { Injectable } from '@angular/core';
import { CustomHttpClient } from '../customHttpClient';
import { Associacao } from '../associacao/associacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssociacaoService {
  constructor(private Client: CustomHttpClient) {}

  obterAssociacao(): Observable<Associacao[]> {
    return this.Client.get('/associacao');
  }

  obterAssociacaoId(id: any): Observable<any> {
    return this.Client.get('/associacao/' + id);
  }

  inserirAssociacao(a: Associacao): Observable<any> {
    const data = {
      produto1: a.produto1,
      produto2: a.produto2,
      produto3: a.produto3,
      produto4: a.produto4,
    };
    return this.Client.post('/associacao/', data);
  }

  atualizarAssociacao(a: Associacao): Observable<any> {
    return this.Client.put('/associacao/' + a.id, a);
  }

  apagarAssociacao(id: number): Observable<any> {
    return this.Client.delete('/associacao/' + id);
  }
}
