import { Component, VERSION } from '@angular/core';
import { environment } from './config';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'ng-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isUserLoggedIn = false;
  name = `${environment.NAME} ${environment.VERSION}`;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log('StoreData: ' + storeData);
    if (storeData != null && storeData == 'true') {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }
}
