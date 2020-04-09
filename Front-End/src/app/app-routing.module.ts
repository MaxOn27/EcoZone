import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LogInComponent } from "./log-in/log-in.component";
import { HomeComponent } from "./home/home.component";
import { AdvertsCreationComponent } from "./adverts-creation/adverts-creation.component";
import { DetailsComponent } from "./home/details/details.component";
import { RegisteredComponent } from "./registration/registered/registered.component";
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "adverts-creation", component: AdvertsCreationComponent },
  { path: "log-in", component: LogInComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "adverts/:id", component: DetailsComponent },
  { path: "registered", component: RegisteredComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
