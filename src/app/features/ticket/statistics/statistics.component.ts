import { Component } from "@angular/core";
import { EChartsOption, graphic } from "echarts";
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  mapOption: EChartsOption = {}
  cities: City[] | undefined;
  rangeDates: Date[] | undefined;
  formGroup: FormGroup | undefined;
  date!: FormControl;
  ngOnInit(): void {
    
    this.mapOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير']
      },
      yAxis: {
        // show: false,
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1200, 1520, 1400, 950, 800],
          type: 'line',
          areaStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#b5a3e9'
              },
              {
                offset: 1,
                color: '#f9f7ff'
              }])

          },
          showSymbol: false,
          smooth: true
        }
      ]
    };
    this.cities = [
      { name: 'سنويا', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
    });
  }

}

