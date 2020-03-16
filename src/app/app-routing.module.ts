import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PayrollComponent} from './payroll/payroll.component';
import {LearningComponent} from './learning/learning.component';
import {HrHelpdeskComponent} from './hr-helpdesk/hr-helpdesk.component';
import {ProfileComponent} from './profile/profile.component';
import {TechComponent} from './tech/tech.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'hr', component: HrHelpdeskComponent},
  {path: 'learning/:technology', component: TechComponent},
  {path: 'learning', component: LearningComponent},
  {path: 'payroll', component: PayrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
