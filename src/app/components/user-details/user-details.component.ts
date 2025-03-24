import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../services/user.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Grab the user ID from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Load all users, then find the one with matching ID
    this.userService.getUsers().subscribe((users: User[]) => {
      this.user = users.find(u => u.id === id);
    });
  }
}
