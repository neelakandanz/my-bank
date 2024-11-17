import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule], // Add CommonModule here
})
export class AppComponent {
  title = 'myapps';
  searchOpen: boolean = false; // State for search container
  drawerOpen: boolean = false; // State for drawer menu
  isSmallScreen: boolean = false; // State for responsive behavior

  constructor() {
    this.updateScreenSize();
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  // Toggle the search bar visibility
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  // Toggle the drawer menu visibility
  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  // Update screen size state for responsiveness
  updateScreenSize() {
    this.isSmallScreen = window.innerWidth < 768; // Small screen threshold
  }
}
