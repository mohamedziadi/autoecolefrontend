import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AddAdminComponent} from './components/admin/add-admin/add-admin.component';
import {ButtonModule} from 'primeng/button';
import { MenuComponent } from './templates/menu/menu.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContentComponent } from './templates/content/content.component';
import { FooterComponent } from './templates/footer/footer.component';
import { TemplateComponent } from './templates/template/template.component';
import { AdminComponent } from './components/admin/admin.component';
import {ToastModule} from 'primeng/toast';
import {ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import {
  ConfirmationService,
  ConfirmDialogModule, FieldsetModule, InputSwitchModule, InputTextareaModule,
  InputTextModule,
  KeyFilterModule,
  MessageModule,
  MessageService, MessagesModule, ScheduleModule,
  TooltipModule,
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { SeanceComponent } from './components/seance/seance.component';
import { AddSeanceComponent } from './components/seance/add-seance/add-seance.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {JwtInterceptorService} from './services/jwt-interceptor.service';
import { AuthorityDirective } from './directives/authority.directive';
import {PaginatorModule} from 'primeng/paginator';
import {CalendarModule} from 'primeng/calendar';
import { ExamenComponent } from './components/examen/examen.component';
import { AddExamenComponent } from './components/examen/add-examen/add-examen.component';
import { EditExamenComponent } from './components/examen/edit-examen/edit-examen.component';

import { CoursComponent } from './components/cours/cours.component';

import { ChapitreComponent } from './components/chapitre/chapitre.component';
import { AddOrUpdateChapitreComponent } from './components/chapitre/add-or-update-chapitre/add--or-update-chapitre.component';

import { InscriptionComponent } from './components/inscription/inscription.component';
import { RegisterAutoEcoleComponent } from './components/register/register-auto-ecole/register-auto-ecole.component';
import { MoniteurComponent } from './components/moniteur/moniteur.component';
import { AddMoniteurComponent } from './components/moniteur/add-moniteur/add-moniteur.component';
import { SecretaireComponent } from './components/secretaire/secretaire.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import { AddCandidatComponent } from './components/candidat/add-candidat/add-candidat.component';
import {DataViewModule} from 'primeng/dataview';
import {EcoleComponent} from './components/ecole/ecole.component';

import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import { AddSecretaireComponent } from './components/secretaire/add-secretaire/add-secretaire.component';
import { AddInscriptionComponent } from './components/inscription/add-inscription/add-inscription.component';
import { CodeComponent } from './components/code/code.component';

import { AddConduiteComponent } from './components/conduite/add-conduite/add-conduite.component';
import { ConduiteComponent } from './components/conduite/conduite.component';
import { AddCodeComponent } from './components/code/add-code/add-code.component';
import { TestComponent } from './components/test/test.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { environment } from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import { EditEcoleComponent } from './components/edit-ecole/edit-ecole.component';
import {NotificationComponent} from './components/notification/notification.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {AddOrUpdateCoursComponent} from "./components/cours/add-or-update-cours/add-or-update.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from 'primeng/primeng';
import {CoursDetailsComponent} from "./components/cours/cours-details.component.ts/cours-details.component";
import {ChapitreDetailsComponent} from "./components/chapitre/chapitre-details/chapitre-details.component";











@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
    MenuComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    TemplateComponent,
    AdminComponent,
    SeanceComponent,
    AddSeanceComponent,
    LoginComponent,
    RegisterComponent,
    AuthorityDirective,
    ExamenComponent,
    AddExamenComponent,
    EditExamenComponent,
    CoursComponent,
    AddOrUpdateCoursComponent,
    AddOrUpdateChapitreComponent,
    ChapitreComponent,
    CoursDetailsComponent,
    InscriptionComponent,
    RegisterAutoEcoleComponent,
    MoniteurComponent,
    AddMoniteurComponent,
    SecretaireComponent,
    CandidatComponent,
    AddCandidatComponent,
    EcoleComponent,
    AddSecretaireComponent,
    AddInscriptionComponent,
    CodeComponent,
    AddConduiteComponent,
    ConduiteComponent,
    AddCodeComponent,
    TestComponent,
    QuizComponent,
    EditEcoleComponent,
    NotificationComponent,
    ChapitreDetailsComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    TooltipModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    InputTextModule ,
    MessageModule,
    MessagesModule,
    KeyFilterModule,
    PaginatorModule,
    FieldsetModule,
    InputTextareaModule,
    DataViewModule,
    DialogModule,
    NgbModule,
    PanelModule,
    MultiSelectModule,
    InputSwitchModule,
    FullCalendarModule,
    ScheduleModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
     ServiceWorkerModule,
    DataTableModule

  ],
  providers: [ConfirmationService , MessageService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
