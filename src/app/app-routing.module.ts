import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './classes/class-list.component';
import { ProfessorListComponent } from './professors/professor-list.component';

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
    path: '',
    redirectTo: '/class-list',
    pathMatch: 'full'
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
