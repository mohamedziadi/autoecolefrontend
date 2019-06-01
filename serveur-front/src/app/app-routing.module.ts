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

import {AddOrUpdateChapitreComponent} from './components/chapitre/add-or-update-chapitre/add--or-update-chapitre.component';
import {ChapitreDetailsComponent} from './components/chapitre/chapitre-details/chapitre-details.component';
import {CandidatCodeComponent} from './components/candidat-code/candidat-code.component';

import {CodeComponent} from './components/code/code.component';
import {AddCodeComponent} from './components/code/add-code/add-code.component';
import {CodeExComponent} from './components/code-ex/code-ex.component';
import {CandidatCodeexComponent} from './components/candidat-codeex/candidat-codeex.component';
import {AjtCodeComponent} from './components/code-ex/ajt-code/ajt-code.component';
import {ConduiteExComponent} from './components/conduite-ex/conduite-ex.component';
import {AjtConduiteComponent} from './components/conduite-ex/ajt-conduite/ajt-conduite.component';
import {CandidatConduiteexComponent} from './components/candidat-conduiteex/candidat-conduiteex.component';
import {CandidatConduiteComponent} from './components/candidat-conduite/candidat-conduite.component';
import {MyAutoEcoleComponent} from "./components/ecole/my-auto-ecole/my-auto-ecole.component";
import {ChangePwdComponent} from "./components/change-pwd/change-pwd.component";






const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'registerAutoEcole', component: RegisterAutoEcoleComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: TemplateComponent, canActivate: [AuthenticationGuardService], children: [
      {path: 'myAutoEcole', component: MyAutoEcoleComponent},
      {path: 'changePwd', component: ChangePwdComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'admin/:param', component: AddAdminComponent},


      {path: 'cours', component: CoursComponent},
      {path: 'cours/:idCours', component: CoursComponent},
      {path: 'add-or-update-cours', component: AddOrUpdateCoursComponent},
      {path: 'add-or-update-chapitre', component: AddOrUpdateChapitreComponent},

      {path: 'moniteur', component: MoniteurComponent},
      {path: 'moniteur/:param', component: AddMoniteurComponent},
      {path: 'secretaire', component: SecretaireComponent},
      {path: 'secretaire/:param', component: AddSecretaireComponent},
      {path: 'candidat', component: CandidatComponent},
      {path: 'candidat/:param', component: AddCandidatComponent},

      {path: 'ecole', component: EcoleComponent},
      {path: 'inscription', component:  InscriptionComponent},
      {path: 'inscription/:param', component:  AddInscriptionComponent},

// seance
      {path: 'code', component: CodeComponent},
      {path: 'code/:param', component: AddCodeComponent},
      {path: 'candidat-code', component: CandidatCodeComponent},

      {path: 'conduite', component: ConduiteComponent},
      {path: 'conduite/:param', component: AddConduiteComponent},
      {path: 'candidat-conduite', component: CandidatConduiteComponent},
// Examen

      {path: 'code-ex', component: CodeExComponent},
      {path: 'codeEx/:param', component: AjtCodeComponent},
      {path: 'candidat-codeex', component: CandidatCodeexComponent },


      {path: 'conduite-ex', component: ConduiteExComponent},
      {path: 'conduiteEx/:param', component: AjtConduiteComponent},
      {path: 'candidat-conduiteex', component: CandidatConduiteexComponent },



      {path: 'test', component: TestComponent},

      {path: 'chapitreDetails', component: ChapitreDetailsComponent},

    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
