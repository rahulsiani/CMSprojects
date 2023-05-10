import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { UserdataService } from 'src/app/service/userdata.service';

import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
// import { STOCKS } from '../shared/stocks';

interface Stock {
  date: Date;
  value: number;
}

@Component({
  selector: 'app-analytics',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class AnalyticsComponent implements OnInit{
  title = 'Line Chart';
  
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;  

  firstDate: any = new Date();
  endDate: any = new Date();

  constructor(private userService: UserdataService) {
    this.width = 700 - this.margin.left - this.margin.right;
    this.height = 370 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.get();    
  }

  filter(){
    this.firstDate = _moment(this.firstDate).format("YYYY-MM-DD");
    this.endDate = _moment(this.endDate).format("YYYY-MM-DD");
    d3.selectAll('#test3 > path').remove(); d3.selectAll('#test3 > g').remove();    
    this.get(this.firstDate, this.endDate)
    
    console.log("StartDate", this.firstDate,"EndDate",this.endDate )
  }

  private initSvg(S:any[]) {
    this.svg = d3
      .select('#test3')
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  private initAxis(S:any[]) {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(S, (d) => d.date));
    this.y.domain(d3Array.extent(S, (d) => d.value));
  }

  private drawAxis() {
    this.svg
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg
      .append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  private drawLine(S:any[]) {
    this.line = d3Shape
      .line()
      .x((d: any) => this.x(d.date))
      .y((d: any) => this.y(d.value));

    this.svg
      .append('path')
      .datum(S)
      .attr('class', 'line')
      .attr('d', this.line);
  }
  
  get(start?:string,end?:string) {
    this.userService.analytics(start,end).subscribe(result => {    
      if(result.data.length){
      const STOCKS = result.data.map(({attributes})=> ({date: new Date(attributes.date), value: attributes.value }))
      
     
      this.initSvg(STOCKS);
      this.initAxis(STOCKS);
      this.drawAxis();
      this.drawLine(STOCKS);

      }
    });
  }
}
