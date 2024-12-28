import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InitialComponent } from './pages/initial/initial.component';

export const routes: Routes = [
    { path: '', component: InitialComponent },
    { path: 'login', component: LoginComponent }
];
