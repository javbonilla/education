import { Component, OnInit } from '@angular/core';
import { Place } from '../places.model';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Place[] = [];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.loadedOffers = this.placesService.getPlaces();
  }

}
