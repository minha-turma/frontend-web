import { Component, OnInit } from '@angular/core';
import { isLoginPage } from '../util';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,
              public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  get display(): boolean {
    return !isLoginPage(this.router);
  }
}
