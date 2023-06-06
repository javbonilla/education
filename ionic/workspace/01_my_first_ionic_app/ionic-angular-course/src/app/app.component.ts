import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  reason: string = '';
  amount: number = 0;
  constructor() {}

  save() {
    console.log('Reason: ' + this.reason);
    console.log('Amount: ' + this.amount);
  }
}
