import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-component-title',
  templateUrl: './main-component-title.component.html',
  styleUrls: ['./main-component-title.component.scss']
})
export class MainComponentTitleComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
