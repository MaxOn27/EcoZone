import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { LogInComponent } from "./log-in/log-in.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { RegistrationComponent } from "./registration/registration.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AdvertsCreationComponent } from "./adverts-creation/adverts-creation.component";
import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from "./home/details/details.component";
import { RegisteredComponent } from "./registration/registered/registered.component";
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavigationComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    AdvertsCreationComponent,
    DetailsComponent,
    RegisteredComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
