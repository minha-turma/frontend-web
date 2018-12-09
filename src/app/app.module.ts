import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassListComponent } from './classes/class-list.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { MenuComponent } from './commons/menu/menu.component';
import { ProfessorListComponent } from './professors/professor-list.component';
import { MainComponentTitleComponent } from './commons/main-component-title/main-component-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ProfessorListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponentTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
