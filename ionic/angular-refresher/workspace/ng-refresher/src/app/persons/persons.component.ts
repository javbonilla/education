import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarWarsPersonsServiceService } from './services/star-wars-persons-service.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  title: string = 'Persons list';
  private personsListSubscription: Subscription;
  private isLoading: boolean = false;

  constructor(private starWarsPersonsService: StarWarsPersonsServiceService) {
    // With 'private' in the 'personsService' method parameter Angular is creating a private class attribute with the same name as the method parameter.
    // We could use the attribute 'this.personsService' in the rest of the component source code.
    this.personList = [];
    this.personsListSubscription = new Subscription();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.starWarsPersonsService.fetchPersons();
    this.personsListSubscription =
      this.starWarsPersonsService.starWarsPersonsChanged.subscribe(
        (starWarsPersons) => {
          this.personList = starWarsPersons;
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    // It's VERY IMPORTANT to unsuscribe to subjects to prevent memory leaks
    this.personsListSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    // this.personsService.removePerson(person);
  }

  isLoadingData() {
    return this.isLoading;
  }
}
