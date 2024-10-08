//Samir insira seus imports abaixo dessa linha
import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login/login.component';
import { RegistrarComponent } from './layouts/login/registrar/registrar.component';
import { TelaprincipalComponent } from './layouts/telaprincipal/telaprincipal.component';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
//Samir insira seus imports acima dessa linha

//Cassiano insira seus
// imports abaixo dessa linha

//Cassiano insira seus imports acima dessa linha

//Luan insira seus imports abaixo dessa linha
import { CachorrodetailsComponent } from './components/cachorro/cachorrodetails/cachorrodetails.component';
import { CachorrolistComponent } from './components/cachorro/cachorrolist/cachorrolist.component';
import { CachorroregisterComponent } from './components/cachorro/cachorroregister/cachorroregister.component';
import { CachorroupdateComponent } from './components/cachorro/cachorroupdate/cachorroupdate.component';

//Luan insira seus imports acima dessa linha

//Joao insira seus imports abaixo dessa linha
import { TutordatailsComponent } from './components/tutor/tutordatails/tutordatails.component';
import { TutorlistComponent } from './components/tutor/tutorlist/tutorlist.component';
import { TutorregisterComponent } from './components/tutor/tutorregister/tutorregister.component';
import { TutorupdateComponent } from './components/tutor/tutorupdate/tutorupdate.component';
import { RequerimentolistComponent } from './components/requerimento/requerimentolist/requerimentolist.component';
import { RequerimentoregisterComponent } from './components/requerimento/requerimentoregister/requerimentoregister.component';
import { RequerimentodeleteComponent } from './components/requerimento/requerimentodelete/requerimentodelete.component';
import { RequerimentoupdateComponent } from './components/requerimento/requerimentoupdate/requerimentoupdate.component';
import { loginGuard } from './service/auth/login.guard';
import { CallbackComponentComponent } from './components/callbackComponent/callback-component/callback-component.component';
import { AuditoriaComponent } from './pages/auditoria/auditoria.component';
import { CachorrosComponent } from './pages/auditoria/cachorros/cachorros.component';
import { TutoresComponent } from './pages/auditoria/tutores/tutores.component';
import { RequerimentosComponent } from './pages/auditoria/requerimentos/requerimentos.component';

//Joao insira seus imports acima dessa linha

export const routes: Routes = [
  //Samir insira suas rotas abaixo dessa linha
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  {
    path: 'home', component: TelaprincipalComponent, canActivate: [loginGuard],
    children: [
      { path: '', redirectTo: 'menu-principal', pathMatch: 'full' },
      { path: 'menu-principal', component: MenuprincipalComponent },
      { path: 'requerimentos', component: RequerimentolistComponent },
      { path: 'requerimentos/novo', component: RequerimentoregisterComponent },
      { path: 'requerimentos/deletar', component: RequerimentodeleteComponent},
      { path: 'requerimentos/atualizar', component: RequerimentoupdateComponent},
      { path: 'auditoria', component: AuditoriaComponent},
      { path: 'auditoria/cachorros-list', component: CachorrosComponent},
      { path: 'auditoria/tutores-list', component: TutoresComponent},
      { path: 'auditoria/requerimentos-list', component: RequerimentosComponent},
      //Samir insira suas rotas acima dessa linha

      //Cassiano insira suas rotas abaixo dessa linha

      //Cassiano insira suas rotas acima dessa linha

      //Luan insira suas rotas abaixo dessa linha
      { path: 'cachorro', component: CachorrolistComponent },
      { path: 'cachorro/register', component: CachorroregisterComponent },
      { path: 'cachorro/update/:id', component: CachorroupdateComponent },
      { path: 'cachorro/list', component: CachorrolistComponent },

      //Luan insira suas rotas acima dessa linha

      //Joao insira suas rotas abaixo dessa linha
      { path: 'tutors', component: TutorlistComponent },
      { path: 'tutors/new', component: TutorregisterComponent },
      { path: 'tutors/edit/:id', component: TutorupdateComponent },
      { path: 'tutors/list', component: TutorlistComponent },

      //Joao insira suas rotas acima dessa linha
    ],
  },
];
