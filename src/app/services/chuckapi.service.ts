import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fact } from '../models/fact';
import { forkJoin, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckapiService {
  readonly BASE_URL = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  async factRandom(): Promise<Fact[]> {
    const data: any = await lastValueFrom(this.http.get(`${this.BASE_URL}/random`));
    return [{
      id: data.id,
      icon_url: data.icon_url,
      value: data.value,
      url: data.url
    }];
  }

  async factList(): Promise<string[]> {
    const data: string[] = await lastValueFrom(this.http.get<string[]>(`${this.BASE_URL}/categories`));
    return data;
  }

  async facts(category: string, count: number): Promise<Fact[]> {
    const requests: Observable<Object>[] = [];

    // Hacemos múltiples solicitudes para obtener el número deseado de hechos
    for (let i = 0; i < count; i++) { // Usa el número proporcionado por el usuario
      requests.push(this.http.get(`${this.BASE_URL}/random?category=${category}`));
    }

    const allDataRaw: any[] = await lastValueFrom(forkJoin(requests));
    const facts: Fact[] = [];

    for (const data of allDataRaw) {
      const fact: Fact = {
        id: data.id,
        icon_url: data.icon_url,
        value: data.value,
        url: data.url
      };
      facts.push(fact);
    }

    return facts; // Regresar todos los hechos obtenidos
}

}
