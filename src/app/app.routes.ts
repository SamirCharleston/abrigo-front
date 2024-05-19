//Samir insira seus imports abaixo dessa linha
import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login/login.component';
import { RegistrarComponent } from './layouts/login/registrar/registrar.component';
import { TelaprincipalComponent } from './layouts/telaprincipal/telaprincipal.component';
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
//Samir insira seus imports acima dessa linha


//Cassiano insira seus imports abaixo dessa linha

//Cassiano insira seus imports acima dessa linha


//Luan insira seus imports abaixo dessa linha

//Luan insira seus imports acima dessa linha


//Joao insira seus imports abaixo dessa linha
import { TutordatailsComponent } from './components/tutor/tutordatails/tutordatails.component';
import { TutorlistComponent } from './components/tutor/tutorlist/tutorlist.component';
import { TutorregisterComponent } from './components/tutor/tutorregister/tutorregister.component';
import { TutorupdateComponent } from './components/tutor/tutorupdate/tutorupdate.component';
import { RequerimentolistComponent } from './components/requerimento/requerimentolist/requerimentolist.component';


//Joao insira seus imports acima dessa linha


export const routes: Routes = [
    
    //Samir insira suas rotas abaixo dessa linha
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'registrar', component: RegistrarComponent},
    { path: 'home', component: TelaprincipalComponent, children: [
        { path: '', redirectTo: 'menu-principal', pathMatch: 'full'},
        { path: 'menu-principal', component: MenuprincipalComponent},
        { path: 'requerimentos', component: RequerimentolistComponent}
    ]},
    //Samir insira suas rotas acima dessa linha


    //Cassiano insira suas rotas abaixo dessa linha

    //Cassiano insira suas rotas acima dessa linha


    //Luan insira suas rotas abaixo dessa linha

    //Luan insira suas rotas acima dessa linha


    //Joao insira suas rotas abaixo dessa linha 
    { path: 'tutors', component: TutorlistComponent },
    { path: 'tutors/new', component: TutorregisterComponent },
    { path: 'tutors/edit/id', component: TutorupdateComponent },
    { path: 'tutors/id', component: TutordatailsComponent }

    //Joao insira suas rotas acima dessa linha

];
