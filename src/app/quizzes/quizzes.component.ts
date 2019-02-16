import { Component, OnInit } from '@angular/core';
import { Quizz } from './quizz';
import { QuizzService } from './quizz.service';
import { Router } from '@angular/router';
import { Subject } from '../subjects/subject';
import { SubjectService } from '../subjects/subject.service';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  subjects: Subject[] = [];

  constructor(public quizzService: QuizzService,
              public router: Router,
              public subjectService: SubjectService) { }

  quizzes: Quizz[] = [];

  ngOnInit() {
    this.quizzService.list().subscribe(quizzes => {
      this.quizzes = quizzes;
    });

    this.subjectService.list().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  toggle(quizz: Quizz) {
    quizz.isOpen = !quizz.isOpen;
    this.quizzService.update(quizz).subscribe(() => {
      this.quizzService.list().subscribe(quizzes => {
        this.quizzes = quizzes;
      });
    });
  }

  navigateToQuiz(quizz: Quizz) {
    this.router.navigate(['quizzes', quizz.id]);
  }

  navigateToCreateQuiz() {
    this.router.navigate(['quizzes/create']);
  }

}
