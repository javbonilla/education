import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../service/places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;

  constructor(private route: ActivatedRoute, private placesService: PlacesService, private navController: NavController) {
    this.place = new Place('x','','','',0);
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

  updateImageThumbnail() {
    // Read new imageUrl
    console.log('updateImageThumbnail');
    // console.log(this.imageUrl);
    // this.place.imageUrl = this.imageUrl;
  }

  goBack() {
    this.navController.navigateBack('places/tabs/offers/' + this.place.id);
  }

}
