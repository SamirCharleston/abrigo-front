//Samir insira seus imports abaixo dessa linha
import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login/login.component';

//Samir insira seus imports acima dessa linha


//Cassiano insira seus imports abaixo dessa linha

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

//Joao insira seus imports acima dessa linha


export const routes: Routes = [
    
    //Samir insira suas rotas abaixo dessa linha
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    //Samir insira suas rotas acima dessa linha


    //Cassiano insira suas rotas abaixo dessa linha

    //Cassiano insira suas rotas acima dessa linha


    //Luan insira suas rotas abaixo dessa linha
    { path: 'cachorro', component: CachorrolistComponent},
    { path: 'cachorro/register', component: CachorroregisterComponent},
    { path: 'cachorro/details', component: CachorrodetailsComponent},
    { path: 'cachorro/update', component: CachorroupdateComponent},

    //Luan insira suas rotas acima dessa linha


    //Joao insira suas rotas abaixo dessa linha 
    { path: 'tutors', component: TutorlistComponent },
    { path: 'tutors/new', component: TutorregisterComponent },
    { path: 'tutors/edit/id', component: TutorupdateComponent },
    { path: 'tutors/id', component: TutordatailsComponent }

    //Joao insira suas rotas acima dessa linha

];
