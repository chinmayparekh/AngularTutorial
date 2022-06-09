import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin/admin.component';

const routes:Routes = [
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
