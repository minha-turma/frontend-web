import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { User } from '../users/user';
import { UserService } from '../users/user.service';
import { SchoolClass } from './school-class';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  data: any[];

  constructor(public userService: UserService) { }

  ngOnInit() {
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
          schoolClass: new SchoolClass({ name: row[3] })});
      });

      this.userService.addAll(users).subscribe(addedUsers => {
        console.log(addedUsers);
      });
    };

    reader.readAsBinaryString(target.files[0]);
  }

}
