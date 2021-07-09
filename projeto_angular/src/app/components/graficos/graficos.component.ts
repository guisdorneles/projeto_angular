import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }],
    }
  };
  public barChartLabels: Label[] = [ '2010', '2011', '2012'] ;
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [ 81, 56, 55, 40], label: 'Series A', stack: 'a' }
  ];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
    }
  };
  public pieChartLabels: Label[] = ['2010', '2011', '2012'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  public pieChartData: ChartDataSets[] = [
    { data: [56, 55, 40], label: 'Series A', stack: 'a' }
  ];

}
