import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './classes/classes.component';
import { ProfessorListComponent } from './professors/professor-list.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizzComponent } from './quizzes/create-quizz/create-quizz.component';
import { ViewQuizzComponent } from './quizzes/view-quizz/view-quizz.component';
import { LoginComponent } from './login/login.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LecturesComponent } from './lectures/lectures.component';
import { MessagesComponent } from './messages/messages.component';
import { ConfidencesComponent } from './confidences/confidences.component';
import { PresenceReportComponent } from './presence-report/presence-report.component';
import { ReportMenuComponent } from './report-menu/report-menu.component';
import { FeelingReportComponent } from './feeling-report/feeling-report.component';
import { ConfidenceReportComponent } from './confidence-report/confidence-report.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'classes',
    component: ClassListComponent
  },
  {
    path: 'lectures',
    component: LecturesComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'quizzes',
    component: QuizzesComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'confidences',
    component: ConfidencesComponent
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
    path: 'reports/presence',
    component: PresenceReportComponent
  },
  {
    path: 'reports/feeling',
    component: FeelingReportComponent
  },
  {
    path: 'reports/confidence',
    component: ConfidenceReportComponent
  },
  {
    path: 'reports',
    component: ReportMenuComponent
  },
  {
    path: '',
    redirectTo: '/classes',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: ClassListComponent
  },
  { path: '**',
    redirectTo: '/classes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
