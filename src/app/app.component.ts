import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapps';
  searchOpen: boolean = false; // State for toggling the search bar

  toggleSearch() {
    this.searchOpen = !this.searchOpen; // Toggle the search bar visibility
  }
}
