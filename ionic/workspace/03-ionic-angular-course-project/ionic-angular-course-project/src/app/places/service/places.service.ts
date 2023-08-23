import { Injectable } from '@angular/core';
import { Place } from '../places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://img.jamesedition.com/listing_images/2023/05/05/13/02/14/0c79fd27-7251-4d35-aacc-a7bb23b58bb3/je/1000x620xc.jpg',
      149.99
    ),
    new Place(
      'p2',
      "L'Amour Toujours",
      'Romantic place in Paris',
      'https://i0.wp.com/thegoodlifefrance.com/wp-content/uploads/2014/01/musee-vie-romantique-1.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://c4.wallpaperflare.com/wallpaper/596/542/474/the-city-fog-castle-germany-wallpaper-preview.jpg',
      99.99
    ),
    new Place(
      'p4',
      'El Duende del Chafaril',
      'El precioso Hotel Rural Duende Del Chafaril se encuentra en San Martín de Trevejo y data de 1922. Dispone de spa, sauna, piscina al aire libre de temporada, restaurante y jardín.',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/166655077.jpg?k=9e0628c90e73a2a3c6684772e2980c9924cb521ff1c47c780a145581b8446283&o=&hp=1',
      175
    ),
    new Place(
      'p5',
      'Abuelo Marciano',
      'Es una casa de campo, situada en la zona donde estuvo asentado un antiguo poblado ?Las Carnaceas? de origen celtibérico y romano; su construcción data de últimos del siglo XIX. Utilizada inicialmente como casa de reposo y posteriormente como casa solariega. Para su rehabilitación se ha respetado su estructura utilizando materiales originales (piedra y madera).',
      'https://media.er2.co/es/caceres/0000000014413/1600/60775614712e2.jpg',
      300
    ),
    new Place(
      'p6',
      'La Posada de los Sentidos',
      'La Posada de los Sentidos fue un antigua casa convento que fundo San Francisco de Borja. Situada en Jarandilla de la Vera',
      'https://media.er2.co/es/caceres/5b72e3c5d4415/1600/60b4c4dec8302.jpg',
      225
    )
  ];

  constructor() {}

  getPlaces() {
    return [...this._places];
  }

  getPlace(placeId: String) {
    return {
      ...this._places.find((p) => {
        return p.id === placeId;
      })!
    };
  }
}
