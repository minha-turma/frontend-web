import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './classes/class-list.component';
import { ProfessorListComponent } from './professors/professor-list.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {
    path: 'class-list',
    component: ClassListComponent
  },
  {
    path: 'professor-list',
    component: ProfessorListComponent
  },
  {
    path: 'tela-login',
    component: TelaLoginComponent

  },
  {
    path: '',
    redirectTo: '/class-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
