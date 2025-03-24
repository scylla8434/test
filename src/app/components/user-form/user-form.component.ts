import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CommonModule],
  selector: 'app-add-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      // In a real app, you would POST this to an API

      alert('User added successfully!');
      this.userForm.reset();
      this.submitted = false;
    }
  }
}
