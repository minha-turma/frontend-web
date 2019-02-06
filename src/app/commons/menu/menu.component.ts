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
      path: '/classes',
      icon: 'fa fa-group'
    },
    {
      name: 'Aulas',
      path: '/lectures',
      icon: 'fa fa-mortar-board'
    },
    {
      name: 'Quizzes',
      path: '/quizzes',
      icon: 'fa fa-check'
    },
    {
      name: 'Mensagens',
      path: '/messages',
      icon: 'fa fa-envelope'
    },
    {
      name: 'Disciplinas',
      path: '/subjects',
      icon: 'fa fa-cube'
    },
    {
      name: 'Auto confiança',
      path: '/confidences',
      icon: 'fa fa-thumbs-up'
    },
    {
      name: 'Relatórios',
      path: '/reports',
      icon: 'fa fa-bar-chart'
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
