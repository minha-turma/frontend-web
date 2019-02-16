import { Component, OnInit } from '@angular/core';
import { Lecture } from './lecture';
import { LectureService } from './lecture.service';
import { SchoolClass } from '../classes/school-class';
import { Subject } from '../subjects/subject';
import { SubjectService } from '../subjects/subject.service';
import { SchoolClassService } from '../classes/schoolClass.service';
import { PresenceService } from '../presences/presence.service';
import { Presence } from '../presences/presence';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {

  lectures: Lecture[] = [];
  subjects: Subject[] = [];
  schoolClasses: SchoolClass[] = [];
  presences: Presence[] = [];
  topics: string[] = [];

  newLecture: Lecture;
  subject: Subject;
  schoolClass: SchoolClass;
  date: Date;
  topic: string;

  constructor(public lectureService: LectureService,
              public subjectService: SubjectService,
              public schoolClassService: SchoolClassService) { }

  ngOnInit() {

    this.lectureService.list().subscribe(lectures => {
      this.lectures = lectures;
    });
    this.subjectService.list().subscribe(subjects => {
      this.subjects = subjects;
    });
    this.schoolClassService.list().subscribe(schoolClasses => {
      this.schoolClasses = schoolClasses;
    });
  }

  addLecture() {
    const doo = new Date(this.date);
    this.lectureService.add(new Lecture({
      date: new Date( doo.getTime() - doo.getTimezoneOffset() * -60000 ), subject: this.subject, topic: this.topic, schoolClass: this.schoolClass
     })).subscribe(lecture => {
      this.lectures.push(lecture);
    });
  }

  toggle(lecture: Lecture) {
    lecture.isOpen = !lecture.isOpen;
    this.lectureService.update(lecture).subscribe(() => {
      this.lectureService.list().subscribe(lectures => {
        this.lectures = lectures;
      });
    });
  }

  loadPresences(lecture: Lecture) {
    this.lectureService.listPresences(lecture).subscribe(presences => {
      this.presences = presences;
    });
  }

  public get hasLectures(): Boolean {
    return this.lectures.length > 0;
  }

  public get hasPresences(): Boolean {
    return this.presences.length > 0;
  }

}
