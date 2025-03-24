import { Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import path from 'path';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent, children: [
    { path: '', component: UserDashboardComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'add-user', component: UserFormComponent },
    { path: 'counter', component: CounterComponent },
    { path: '**', redirectTo: '' } // fallback to dashboard
  ]
  },

];
