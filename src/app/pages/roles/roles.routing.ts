import { Routes, RouterModule }  from '@angular/router';
import {  RolesFormComponent } from './roles.form.component';

const routes: Routes = [
  {
    path: '',
    component: RolesFormComponent
  }
];

export const routing = RouterModule.forChild(routes);