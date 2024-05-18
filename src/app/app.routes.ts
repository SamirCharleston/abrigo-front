import { Routes } from '@angular/router';
import { CachorrolistComponent } from './components/cachorro/cachorrolist/cachorrolist.component';

export const routes: Routes = [
    { path: 'cachorro', component: CachorrolistComponent, pathMatch: 'full' },
];
