import { Component, OnInit } from '@angular/core';
import { AuthService } from '../commons/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedId()) {
      this.router.navigate(['classes']);
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(result => {
      if (result) {
        this.router.navigate(['classes']);
      }
    });
  }

}
