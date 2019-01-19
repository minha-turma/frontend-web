import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassListComponent } from './classes/classes.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MenuComponent } from './commons/menu/menu.component';
import { ProfessorListComponent } from './professors/professor-list.component';
import { MainComponentTitleComponent } from './commons/main-component-title/main-component-title.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreateQuizzComponent } from './quizzes/create-quizz/create-quizz.component';
import { ViewQuizzComponent } from './quizzes/view-quizz/view-quizz.component';
import { Interceptor } from './commons/service/interceptor.module';
import { LoginComponent } from './login/login.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ProfessorListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponentTitleComponent,
    QuizzesComponent,
    CreateQuizzComponent,
    ViewQuizzComponent,
    LoginComponent,
    LecturesComponent,
    SubjectsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Interceptor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
