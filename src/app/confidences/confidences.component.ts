import { Component, OnInit } from '@angular/core';
import { ConfidenceService } from './confidence.service';
import { Confidence } from './confidence';
import { Subject } from '../subjects/subject';

@Component({
  selector: 'app-confidences',
  templateUrl: './confidences.component.html',
  styleUrls: ['./confidences.component.scss']
})
export class ConfidencesComponent implements OnInit {

  confidences: Confidence[] = [];

  constructor(public confidenceService: ConfidenceService) { }

  ngOnInit() {
    this.confidenceService.list().subscribe(confidences => {
      this.confidences = confidences;
    });
  }

  public get subjects(): Subject[] {
    const subjects = [];

    this.confidences.forEach(cfd => {
      if (!subjects.some(sbj => sbj.id === cfd.id)) {
        subjects.push(cfd.subject);
      }
    });
    return subjects;
  }

  public getConfidences(subject: Subject): Confidence[] {
    return this.confidences.filter(cfd => cfd.subject.id === subject.id);
  }

  getConfidenceImage(confidence: Confidence) {
    switch (confidence.status) {
      case 'Confident':
        return 'smart.png';
      case 'Confused':
        return 'confused.png';
      case 'Unsecure':
        return 'suspicious.png';
    }
  }

}
