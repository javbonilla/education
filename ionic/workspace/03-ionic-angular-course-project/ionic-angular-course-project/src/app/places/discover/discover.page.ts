import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { Place } from '../places.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placesService: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    console.log('ngOnInit()');
    this.loadedPlaces = this.placesService.getPlaces();
    console.log('loadedPlaces: ' + this.loadedPlaces);
  }

  onOpenSideMenu() {
    console.log('onOpenSideMenu()');
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'm1');
    this.menuCtrl.open('m1');
  }

}
