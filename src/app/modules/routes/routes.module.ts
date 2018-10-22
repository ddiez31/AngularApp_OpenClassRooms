import { Routes } from '@angular/router';

import { AuthGuard } from 'src/app/services/auth-guard.service';

import { MachineViewComponent } from 'src/app/components/machine-view/machine-view.component';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SingleMachineComponent } from 'src/app/components/single-machine/single-machine.component';
import { FourOhFourComponent } from 'src/app/components/four-oh-four/four-oh-four.component';
import { EditMachineComponent } from 'src/app/components/edit-machine/edit-machine.component';
import { UserListComponent } from 'src/app/components/user-list/user-list.component';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';

export const appRoutes: Routes = [
  { path: 'machines', canActivate: [AuthGuard], component: MachineViewComponent },
  { path: 'machines/:id', canActivate: [AuthGuard], component: SingleMachineComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditMachineComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];