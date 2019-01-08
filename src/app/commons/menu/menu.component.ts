import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isLoginPage } from '../util';

interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  router: Router;

  options: MenuItem[] = [
    {
      name: 'Turmas',
      path: '/class-list',
      icon: 'fa fa-group'
    },
    {
      name: 'Professores',
      path: '/professor-list',
      icon: 'fa fa-mortar-board'
    },
    {
      name: 'Presenças',
      path: '/presences',
      icon: 'fa fa-check-square'
    },
    {
      name: 'Quizzes',
      path: '/quizzes',
      icon: 'fa fa-list-alt'
    },
    {
      name: 'Auto didatismo',
      path: '/self-learning',
      icon: 'fa fa-rocket'
    },
    {
      name: 'Sentiments',
      path: '/feelings',
      icon: 'fa fa-heart'
    },
    {
      name: 'Auto confiança',
      path: '/auto-trust',
      icon: 'fa fa-thumbs-up'
    }];

  selected: MenuItem = {
    name: '', path: '', icon: ''
  };

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    Object.assign(this.selected, this.options[0]);
    this.adjustHeight();
  }

  select(item: MenuItem): void {
    Object.assign(this.selected, item);
    this.router.navigate([item.path]);
    this.adjustHeight();
  }

  isSelected(item: MenuItem) {
    return item.path === this.selected.path;
  }

  /**
   * Adjust lateral menu to fullfill page height
   */
  adjustHeight() {
    setTimeout(function() {
      const height = document.getElementsByTagName('body')[0].offsetHeight + 'px';
      if (document.getElementsByTagName('aside')[0]) {
        document.getElementsByTagName('aside')[0].style.minHeight = height;
      }
    }, 100);
  }

  get display(): boolean {
    return !isLoginPage(this.router);
  }

}
