import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from "./modules/routes/routes.module";
import { RouterModule } from "@angular/router";

import { MachineService } from "./services/machine.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MachineComponent } from "./components/machine/machine.component";
import { MachineViewComponent } from './components/machine-view/machine-view.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { SingleMachineComponent } from './components/single-machine/single-machine.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from "./components/new-user/new-user.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, MachineComponent, AuthComponent, MachineViewComponent, HomeComponent, SingleMachineComponent, FourOhFourComponent, EditMachineComponent, UserListComponent, NewUserComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [MachineService, AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
