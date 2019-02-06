import { Component } from '@angular/core';


@Component({
  selector: 'app-presence-report',
  templateUrl: './presence-report.component.html',
  styleUrls: ['./presence-report.component.scss']
})
export class PresenceReportComponent {

  constructor() { }

  
  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 65, 70, 80, 65, 59, 80, 81, 56 ], label: 'Média de Presensa por Meses do Ano'},
    // {data: [28, 48, 40, 19, 86, 27, 90, 28, 48, 40, 19, 86 ], label: 'Turma B'},
    // {data: [18, 48, 77, 9, 100, 27, 40, 18, 48, 77, 9, 100 ], label: 'Turma C'}
  ];
  public lineChartLabels:Array<any> = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julio', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
