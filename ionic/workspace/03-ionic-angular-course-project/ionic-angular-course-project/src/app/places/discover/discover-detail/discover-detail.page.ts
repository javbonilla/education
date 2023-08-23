import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../places.model';
import { PlacesService } from '../../service/places.service';

@Component({
  selector: 'app-discover-detail',
  templateUrl: './discover-detail.page.html',
  styleUrls: ['./discover-detail.page.scss'],
})
export class DiscoverDetailPage implements OnInit {
  place!: Place;

  constructor(
    private router: Router,
    private navController: NavController,
    private modalController: ModalController,
    private placesService: PlacesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('ngOnInit()');
    // Get the place
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navController.navigateBack('places/tabs/discover');
        return;
      }
      const placeId = paramMap.get('placeId');
      console.log('placeId is ' + placeId);
      if (placeId !== null) {
        this.place = this.placesService.getPlace(placeId);
        console.log(this.place);
      } else {
        this.navController.navigateBack('places/tabs/discover');
      }
    });
  }

  onBookPlace() {
    //this.router.navigateByUrl('/places/tabs/discover');
    // Use navController to navigate back
    // this.navController.navigateBack('/places/tabs/discover');
    // Another option: this.navController.pop()
    // But that will cause a problem if stack of pages is initialized in placeDetail

    // Open a modal to book the place
    this.modalController
      .create({
        component: CreateBookingComponent,
        componentProps: {
          selectedPlace: this.place,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('Booking is confirmed!');
        }
      });
  }
}
