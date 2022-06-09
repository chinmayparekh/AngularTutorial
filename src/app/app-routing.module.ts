import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AdminComponent} from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes:Routes = [
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
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
