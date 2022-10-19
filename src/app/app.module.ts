import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';
import { AdddressComponent } from './adddress/adddress.component';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {
    path:"",component:AdddressComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
