import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';
import { Quizz } from '../quizz';
import { Router } from '@angular/router';
import { Subject } from '../../subjects/subject';
import { SubjectService } from '../../subjects/subject.service';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent implements OnInit {

  subjects: Subject[] = [];

  statement: String;
  subject: Subject;
  topic: string;
  alternatives: String[] = [];
  correct: number;
  isOpen: boolean;

  constructor(public quizzService: QuizzService,
              public router: Router,
              public subjectService: SubjectService) { }

  ngOnInit() {
    [1, 2, 3, 4, 5].forEach(() => {
      this.alternatives.push('');
    });

    this.subjectService.list().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  saveQuizz() {
    const quizz = new Quizz({ statement: this.statement, subject : this.subject, topic: this.topic ,alternatives: this.alternatives, correct: this.correct, isOpen: this.isOpen});
    this.quizzService.add(quizz).subscribe(addedQuizz => {
      this.router.navigate(['/quizzes']);
    });
  }

}
