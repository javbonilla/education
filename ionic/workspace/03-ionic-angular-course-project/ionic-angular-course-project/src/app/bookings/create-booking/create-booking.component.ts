import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Place } from 'src/app/places/places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace!: Place;
  isEmpty: boolean = false;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log('ngOnInit()');

    if (this.selectedPlace === null) {
      console.warn('no selected place received');
      this.isEmpty = true;
    } else {
    }
  }

  onCancel() {
    console.log('onCancel()');
    this.modalController.dismiss(null, 'cancel');
  }

  onBookPlace() {
    console.log('onBookPlace()');
    this.modalController.dismiss({message: 'This is a dummy message'}, 'confirm');
  }
}
