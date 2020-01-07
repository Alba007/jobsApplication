import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobsComponentComponent} from './components/jobs-component/jobs-component.component';
import {UseeJobApplicationComponent} from './components/usee-job-application/usee-job-application.component';
import {PersonalDataComponent} from './components/personal-data/personal-data.component';
import {LoginComponent} from './components/login/login.component';


const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'application', component: UseeJobApplicationComponent},
  {path: 'jobs', component: JobsComponentComponent},
  {path: 'data', component: PersonalDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {
}
