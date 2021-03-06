import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { Quizz } from '../quizz';
import { Router, ActivatedRoute } from '@angular/router';
import { Answer } from '../answer';

@Component({
  selector: 'app-view-quizz',
  templateUrl: './view-quizz.component.html',
  styleUrls: ['./view-quizz.component.scss']
})
export class ViewQuizzComponent implements OnInit {

  quizz: Quizz;
  answers: Answer[];

  constructor(public quizzService: QuizzService,
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.quizzService.get(parseInt(paramsId.id, 10)).subscribe(quizz => {
        this.quizz = quizz;

        this.quizzService.listAnswer(this.quizz).subscribe(answers => {
          this.answers = answers;
        });
      });
    });
  }

  saveQuizz() {
    this.quizzService.update(this.quizz).subscribe(addedQuizz => {
      this.router.navigate(['/quizzes']);
    });
  }

}
