import { Component, OnInit } from '@angular/core';
import { Quizz } from './quizz';
import { QuizzService } from './quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  constructor(public quizzService: QuizzService,
              public router: Router) { }

  quizzes: Quizz[] = [];

  ngOnInit() {
    this.quizzService.list().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  navigateToQuiz(quizz: Quizz) {
    this.router.navigate(['quizzes', quizz.id]);
  }

  navigateToCreateQuiz() {
    this.router.navigate(['quizzes/create']);
  }

}
