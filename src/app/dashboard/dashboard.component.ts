import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Flag to control sidebar collapse state
  sidebarCollapsed: boolean = false;
  
  // Current date/time and a placeholder logged in user
  currentTime: Date = new Date();
  loggedInUser: string = 'John Doe';

  // // Timer for updating the clock
  // private timer: any;

  // ngOnInit(): void {
  //   // Update current time every second
  //   this.timer = setInterval(() => {
  //     this.currentTime = new Date();
  //   }, 1000);
  //   console.debug('Dashboard component initialized with user:', this.loggedInUser);
  // }

  // ngOnDestroy(): void {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //     console.debug('Timer cleared on Dashboard component destroy.');
  //   }
  // }

  // Toggle sidebar collapsed state
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    console.debug('Sidebar toggled. New state:', this.sidebarCollapsed ? 'Collapsed' : 'Expanded');
  }

  // Placeholder logout functionality
  logout(): void {
    console.debug('Logout clicked. Implement logout logic here.');
    alert('Logged out!');
  }
}
