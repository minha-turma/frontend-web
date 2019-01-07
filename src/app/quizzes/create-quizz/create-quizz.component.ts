import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { Quizz } from '../quizz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent implements OnInit {

  statement: String;
  alternatives: String[] = [];
  correct: number;

  constructor(public quizzService: QuizzService,
              public router: Router) { }

  ngOnInit() {
    [1, 2, 3, 4, 5].forEach(() => {
      this.alternatives.push('');
    });
  }

  saveQuizz() {
    const quizz = new Quizz({ statement: this.statement, alternatives: this.alternatives, correct: this.correct});
    this.quizzService.add(quizz).subscribe(addedQuizz => {
      this.router.navigate(['/quizzes']);
    });
  }

}
