import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = 'http://localhost:9090/api/attendance';

  constructor(private http: HttpClient) { }

  // Get All Attendance
  getAttendance(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Save Attendance
  saveAttendance(attendance: any): Observable<any> {
    return this.http.post(this.apiUrl, attendance);
  }

  // Get Weekly Attendance (Dashboard)
  getWeeklyAttendance(): Observable<any> {
    return this.http.get(`${this.apiUrl}/weekly`);
  }

}