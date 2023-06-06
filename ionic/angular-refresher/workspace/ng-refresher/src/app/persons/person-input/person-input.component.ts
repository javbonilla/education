import { Component, Output, EventEmitter } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonsService) {
  }

  onCreatePerson() {
    console.log('Created a person. Name: ' + this.enteredPersonName);
    this.personsService.addPerson(this.enteredPersonName);
  }
}
