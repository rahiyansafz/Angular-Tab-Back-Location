import { Component, OnInit, ViewChild } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';
import { MonthHeaderComponent } from '../month-heder/month-heder.component';

@Component({
  selector: 'ca-view-calendars',
  templateUrl: './view-calendars.component.html',
})
export class ViewCalendarsComponent implements OnInit {
  // @ViewChild(MonthHeaderComponent) header: any;
  ngOnInit() {
}
}