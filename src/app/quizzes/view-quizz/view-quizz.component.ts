import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { Quizz } from '../quizz';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-quizz',
  templateUrl: './view-quizz.component.html',
  styleUrls: ['./view-quizz.component.scss']
})
export class ViewQuizzComponent implements OnInit {

  quizz: Quizz;

  constructor(public quizzService: QuizzService,
              public activatedRoute: ActivatedRoute,
              public router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.quizzService.get(parseInt(paramsId.id, 10)).subscribe(quizz => {
        this.quizz = quizz;
      });
  });
  }

  saveQuizz() {
    this.quizzService.update(this.quizz).subscribe(addedQuizz => {
      this.router.navigate(['/quizzes']);
    });
  }

}
