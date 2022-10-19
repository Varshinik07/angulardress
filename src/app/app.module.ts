import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule,Routes } from '@angular/router';
import { AdddressComponent } from './adddress/adddress.component';
import { FormsModule } from '@angular/forms';
import { ViewdressComponent } from './viewdress/viewdress.component';
import{HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AdddressComponent
  },
  {
    path:"viewdress",component:ViewdressComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddressComponent,
    ViewdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
