import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path: '',
        component: TelaLoginComponent
    },
    {
        path: 'dashboard',
        component: AppComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }