import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../service/places.service';
import { Place } from '../../places.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;

  constructor(private navController: NavController, private route: ActivatedRoute, private placesService: PlacesService) {
    this.place = new Place('x', '', '', '', 0);
  }

  ngOnInit() {
    console.log('ngOnInit()');
    // Get the place
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('places/tabs/offers');
        return;
      }
      const placeId = paramMap.get('placeId');
      console.log('placeId is ' + placeId);
      if (placeId !== null) {
        this.place = this.placesService.getPlace(placeId);
        console.log(this.place);
      }
    });
  }

  onBookPlace() {
    this.navController.navigateBack('/places/tabs/offers');
  }
}
