import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './classes/class-list.component';
import { ProfessorListComponent } from './professors/professor-list.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizzComponent } from './quizzes/create-quizz/create-quizz.component';
import { ViewQuizzComponent } from './quizzes/view-quizz/view-quizz.component';

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
    path: 'quizzes',
    component: QuizzesComponent
  },
  {
    path: 'quizzes/create',
    component: CreateQuizzComponent
  },
  {
    path: 'quizzes/:id',
    component: ViewQuizzComponent
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
