import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-browse',
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css',
})
export class BrowseComponent {
  private authService = inject(AuthService);

  //some method
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  email = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  picture = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;

  signOut() {
    this.authService.signOut();
  }
}
