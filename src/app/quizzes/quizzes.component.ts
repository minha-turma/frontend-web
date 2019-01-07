import { Component, OnInit } from '@angular/core';
import { Quizz } from './quizz';
import { QuizzService } from './quizz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  constructor(public quizzService: QuizzService) { }

  quizzes: Quizz[] = [];

  ngOnInit() {
    this.quizzService.list().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

}
