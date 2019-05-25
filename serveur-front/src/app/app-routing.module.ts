import {NgModule, Testability} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplateComponent} from './templates/template/template.component';
import {AdminComponent} from './components/admin/admin.component';
import {SeanceComponent} from './components/seance/seance.component';
import {AddAdminComponent} from './components/admin/add-admin/add-admin.component';
import {AddSeanceComponent} from './components/seance/add-seance/add-seance.component';
import {LoginComponent} from './components/login/login.component';
import {AuthenticationGuardService} from './services/authentication-guard.service';
import {RegisterComponent} from './components/register/register.component';
import {ExamenComponent} from './components/examen/examen.component';
import {AddExamenComponent} from './components/examen/add-examen/add-examen.component';
import {CoursComponent} from './components/cours/cours.component';
import {AddOrUpdateCoursComponent} from './components/cours/add-or-update-cours/add-or-update.component';
import {RegisterAutoEcoleComponent} from './components/register/register-auto-ecole/register-auto-ecole.component';
import {MoniteurComponent} from './components/moniteur/moniteur.component';
import {AddMoniteurComponent} from './components/moniteur/add-moniteur/add-moniteur.component';
import {SecretaireComponent} from './components/secretaire/secretaire.component';
import {CandidatComponent} from './components/candidat/candidat.component';
import {EcoleComponent} from './components/ecole/ecole.component';
import {AddCandidatComponent} from './components/candidat/add-candidat/add-candidat.component';
import {AddSecretaireComponent} from './components/secretaire/add-secretaire/add-secretaire.component';
import {InscriptionComponent} from './components/inscription/inscription.component';
import {AddInscriptionComponent} from './components/inscription/add-inscription/add-inscription.component';
import {Conduite} from './model/conduite';
import {AddConduiteComponent} from './components/conduite/add-conduite/add-conduite.component';
import {ConduiteComponent} from './components/conduite/conduite.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {TestComponent} from './components/test/test.component';
import {EditEcoleComponent} from './components/edit-ecole/edit-ecole.component';
import {NotificationComponent} from './components/notification/notification.component';
import {AddOrUpdateChapitreComponent} from "./components/chapitre/add-or-update-chapitre/add--or-update-chapitre.component";
import {ChapitreDetailsComponent} from "./components/chapitre/chapitre-details/chapitre-details.component";
import {CandidatCodeComponent} from "./components/candidat-code/candidat-code.component";
import {CandidatConduiteComponent} from "./components/candidat-conduite/candidat-conduite.component";
import {CodeComponent} from "./components/code/code.component";
import {AddCodeComponent} from "./components/code/add-code/add-code.component";



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'registerAutoEcole', component: RegisterAutoEcoleComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: TemplateComponent, canActivate: [AuthenticationGuardService], children: [
      {path: 'admin', component: AdminComponent},
      {path: 'admin/:param', component: AddAdminComponent},
      {path: 'seance', component: SeanceComponent},
      {path: 'seance/:param', component: AddSeanceComponent},
      {path: 'examen', component: ExamenComponent},
      {path: 'add-examen', component: AddExamenComponent},
      {path: 'cours', component: CoursComponent},
      {path: 'cours/:idCours',component: CoursComponent},
      {path: 'add-or-update-cours', component: AddOrUpdateCoursComponent},
      {path: 'add-or-update-chapitre', component: AddOrUpdateChapitreComponent},
      {path: 'moniteur', component: MoniteurComponent},
      {path: 'moniteur/:param', component: AddMoniteurComponent},
      {path: 'secretaire', component: SecretaireComponent},
      {path: 'secretaire/:param', component: AddSecretaireComponent},
      {path: 'candidat', component: CandidatComponent},
      {path: 'candidat/:param', component: AddCandidatComponent},
      {path: 'ecole', component: EcoleComponent},
      {path: 'edit-ecole', component: EditEcoleComponent},
      {path: 'inscription', component:  InscriptionComponent},
      {path: 'inscription/:param', component:  AddInscriptionComponent},
      {path: 'code', component: CodeComponent},
      {path: 'code/:param', component: AddCodeComponent},
      {path: 'conduite', component: ConduiteComponent},
      {path: 'conduite/:param', component: AddConduiteComponent},
      {path: 'candidat-code', component: CandidatCodeComponent},
      {path: 'candidat-conduite', component: CandidatConduiteComponent},
      {path: 'test', component: TestComponent},
      {path: 'test', component: NotificationComponent},
      {path: 'chapitreDetails', component: ChapitreDetailsComponent},

    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
