import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { Subject } from './subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Subject[] = [];
  newSubjectName: String;

  constructor(public subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.list().subscribe(subjects => {
      this.subjects = subjects;
    });
  }

  addSubject() {
    this.subjectService.add(new Subject({ name: this.newSubjectName })).subscribe(subject => {
      this.subjects.push(subject);
      this.newSubjectName = '';
    });
  }

  public get hasSubjects(): Boolean {
    return this.subjects.length > 0;
  }

}
