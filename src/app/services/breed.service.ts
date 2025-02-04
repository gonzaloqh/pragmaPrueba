import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/***
 * Servicio para la consulta al APi de Cats
 */
export class BreedService {

  constructor(private http: HttpClient) { }

  async getBreeds(): Promise<any[]> {
    let cat_api_url = environment.cat_api_url;
    let headers = new HttpHeaders({
      'x-api-key': environment.cat_api_key
    });

    return firstValueFrom(this.http.get<any[]>(cat_api_url, { headers }));
  }
}
