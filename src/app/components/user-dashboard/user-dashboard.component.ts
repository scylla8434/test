import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  // Filter users by name or email
  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );

    // Reset to the first page after search
    this.currentPage = 1;
  }

  // Delete user from the array (client-side only)
  deleteUser(user: User): void {
    this.filteredUsers = this.filteredUsers.filter(u => u.id !== user.id);
    this.users = this.users.filter(u => u.id !== user.id);

    // Optionally reset to page 1 if current page goes out of range
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  // View user details (navigates to user details page)
  viewDetails(user: User): void {
    this.router.navigate(['/dashboard/user', user.id]);
  }

  // Computed: total pages
  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

  // Computed: array of page numbers (e.g., [1, 2, 3, ...])
  get pagesArray(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  // Computed: slice the filteredUsers to show only the current page
  get paginatedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  // Pagination controls
  goToPage(page: number): void {
    this.currentPage = page;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
