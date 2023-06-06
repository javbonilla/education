import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsPersonsServiceService {
  private starWarsPersons: string[];
  starWarsPersonsChanged = new Subject<string[]>();

  constructor(private httpClient: HttpClient) {
    this.starWarsPersons = [];
  }

  fetchPersons() {
    // Use Http with a GET method to retrieve Star Wars persons
    this.httpClient.get<any>('https://swapi.dev/api/people')
    .pipe(map(response => {
      // Transform data and return it
      return response.results.map((result: { name: string; }) => result.name);
    })) // The pipe method is for chaining observable operators
    .subscribe(mappedResponse => {
      console.log(mappedResponse);
      this.starWarsPersonsChanged.next(mappedResponse);
    });
  }
}
