import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  // We can inject services into other components using a feature called 'dependency injection'
  providedIn: 'root'
})
export class PersonsService {
  private persons: string[] = ['Max', 'Manuel', 'Anna', 'Jane'];

  constructor() { }

  // Subject is very similar to an event emitter. Is a generic type and we can use it to manage and emit data.
  personsChanged = new Subject<string[]>();

  getPersons() {
    return this.persons;
  }

  addPerson(name: string) {
    console.log('Persons service: adding a person: ' + name);
    this.persons.push(name);
    this.personsChanged.next(this.persons); // next is used for emit a value
  }

  removePerson(name:string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons); // next is used for emit a value
  }
}
