import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { User } from '../users/user';
import { UserService } from '../users/user.service';
import { SchoolClass } from './school-class';
import { SchoolClassService } from './schoolClass.service';
import { QuizzService } from '../quizzes/quizz.service';
import { PresenceService } from '../presences/presence.service';

interface Group {
  name: string;
  students: User[];
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassListComponent implements OnInit {

  data: any[];
  groups: Group[] = [];

  studentsCount = 0;
  schoolClassCount = 0;
  presenceAvg = 0;
  quizzesCount = 0;

  constructor(public userService: UserService,
              public schoolClassService: SchoolClassService,
              public quizService: QuizzService,
              public presenceService: PresenceService) { }

  ngOnInit() {
    this.loadUsers();
    this.loadCount();
  }

  loadUsers() {
    this.userService.listStudents().subscribe(users => {
      users.forEach(user => {
        const schoolClass = user.schoolClass;
        const group = this.groups.find(g => g.name === schoolClass.name);
        if (group === undefined && schoolClass.validate()) {
          this.groups.push({ name: schoolClass.name, students: []});
        }
        if (schoolClass.validate()) {
          this.groups.find(g => g.name === schoolClass.name).students.push(user);
        }
      });
    });

    console.log(this.groups);
  }

  loadCount() {
    this.userService.count().subscribe(count => {
      this.studentsCount = count;
    });
    this.quizService.count().subscribe(count => {
      this.quizzesCount = count;
    });
    this.schoolClassService.count().subscribe(count => {
      this.schoolClassCount = count;
    });
    this.presenceService.average().subscribe(avg => {
      this.presenceAvg = avg;
    });
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any>(XLSX.utils.sheet_to_json(ws, {header: 1}));

      /* Remove header */
      this.data.splice(0, 1);

      /* Transform loaded data into domain classes */
      const users: User[] = this.data.map(row => {
        return new User({
          name: row[0],
          username: row[1],
          password: row[2],
          schoolClass: new SchoolClass({ name: row[3] }),
          authorities: ['ROLE_STUDENT']});
      });

      this.userService.addAll(users).subscribe(addedUsers => {
        this.loadUsers();
      });
    };

    reader.readAsBinaryString(target.files[0]);
  }

  getFeelingImage(user: User) {
    switch (user.feeling) {
      case 'Happy':
        return 'happy.png';
      case 'Unhappy':
        return 'unhappy.png';
      case 'Mad':
        return 'mad.png';
      case 'Confused':
        return 'confused.png';
    }
  }

  getColor(rate: number): string {
    if (rate <= 30) {
      return 'red';
    } else if (rate > 30 && rate < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  public get hasStudents(): boolean {
    return this.groups.length > 0;
  }

}
