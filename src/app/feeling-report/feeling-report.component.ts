import { Component } from '@angular/core';

@Component({
  selector: 'app-feeling-report',
  templateUrl: './feeling-report.component.html',
  styleUrls: ['./feeling-report.component.scss']
})
export class FeelingReportComponent {

  // Pie
  public pieChartLabels:string[] = ['Triste', 'Normal', 'Feliz'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
