import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes:Routes = [

  // {
  //   path:'**',
  //   component: PageNotFoundComponent
  // }
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
