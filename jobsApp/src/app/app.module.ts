import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {NavComponent} from './components/nav/nav.component';
import {JobsComponentComponent} from './components/jobs-component/jobs-component.component';
import {UseeJobApplicationComponent} from './components/usee-job-application/usee-job-application.component';
import {PersonalDataComponent} from './components/personal-data/personal-data.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {InterceptorsService} from './services/interceptors.service';
import {RoutingRoutingModule} from './routing-routing.module';
import {MatTableModule} from '@angular/material/table';
import {JobsCrudComponent} from './components/jobs-crud/jobs-crud.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    JobsComponentComponent,
    UseeJobApplicationComponent,
    PersonalDataComponent,
    JobsCrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingRoutingModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorsService, multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [JobsCrudComponent]
})
export class AppModule {
}
