import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes:Routes = [

  {
    path:'admin',loadChildren:() => import('./admin/admin.module' ).then(mod=>mod.AdminModule)
  }
  {
    path:'user',loadChildren:() => import('./user/user.module' ).then(mod=>mod.UserModule)
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
