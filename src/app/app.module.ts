import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';
@NgModule({ 
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    UserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
