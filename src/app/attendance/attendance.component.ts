import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  selectedPeriod = 'Monthly';

  attendance = 92;
  present = 184;
  absent = 16;
  total = 200;

  subjectAttendance: any[] = [];

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance() {

    if (this.selectedPeriod === 'Weekly') {

      this.attendance = 90;
      this.present = 27;
      this.absent = 3;
      this.total = 30;

    } else if (this.selectedPeriod === 'Monthly') {

      this.attendance = 92;
      this.present = 92;
      this.absent = 8;
      this.total = 100;

    } else {

      this.attendance = 92;
      this.present = 184;
      this.absent = 16;
      this.total = 200;

    }

    this.subjectAttendance = [
      { subject: 'Angular', present: 18, total: 20 },
      { subject: 'Spring Boot', present: 19, total: 20 },
      { subject: 'DBMS', present: 17, total: 20 },
      { subject: 'Operating System', present: 20, total: 20 }
    ];
  }

  changePeriod(event: any) {
    this.selectedPeriod = event.target.value;
    this.loadAttendance();
  }

  getPercentage(item: any): number {
    return Math.round((item.present / item.total) * 100);
  }

}