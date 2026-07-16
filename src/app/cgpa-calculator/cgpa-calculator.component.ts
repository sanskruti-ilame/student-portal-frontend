import { Component } from '@angular/core';

@Component({
  selector: 'app-cgpa-calculator',
  templateUrl: './cgpa-calculator.component.html',
  styleUrls: ['./cgpa-calculator.component.css']
})
export class CGPACalculatorComponent {

  // CGPA Calculator
  currentCgpa: number = 0;
  percentage: number = 0;
  result: number | null = null;

  // Attendance Calculator
  totalClasses: number = 0;
  attendedClasses: number = 0;
  attendancePercentage: number | null = null;
  classesNeeded: number | null = null;
  attendanceMessage: string = '';

  calculate() {

    // CGPA Calculation
    if (this.currentCgpa && this.percentage) {
      this.result = Number(
        (this.currentCgpa + (this.percentage / 100)).toFixed(2)
      );
    }

    // Attendance Calculation
    if (this.totalClasses > 0 && this.attendedClasses >= 0) {

      this.attendancePercentage = Number(
        ((this.attendedClasses / this.totalClasses) * 100).toFixed(2)
      );

      if (this.attendancePercentage >= 75) {

        this.classesNeeded = 0;
        this.attendanceMessage =
          '✅ Congratulations! Your attendance is above 75%.';

      } else {

        let x = Math.ceil(
          (0.75 * this.totalClasses - this.attendedClasses) / 0.25
        );

        this.classesNeeded = x;
        this.attendanceMessage =
          `❌ You need to attend the next ${x} classes continuously to reach 75% attendance.`;
      }
    }
  }

}