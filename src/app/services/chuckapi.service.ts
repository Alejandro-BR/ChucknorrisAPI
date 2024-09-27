import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fact } from '../models/fact';
import { forkJoin, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckapiService {

  readonly BASE_URL = 'https://api.chucknorris.io/jokes/'

  constructor(private http: HttpClient) { }

  async factRandom(): Promise<Fact[]> {
    const requests: Observable<Object>[] = [];
    requests.push(this.http.get(this.BASE_URL + "/random"))
    const allDataRaw: any[] = await lastValueFrom(forkJoin(requests));
    const facts: Fact[] = [];

    for (const data of allDataRaw) {
      const fact: Fact = {
        id: data.id,
        icon_url: data.icon_url['official-artwork'].front_default,
        value: data.value,
        url: data.url
      }

      facts.push(fact);
    }

    return facts
  }


}