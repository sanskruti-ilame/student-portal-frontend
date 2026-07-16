import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private studentUrl = 'http://localhost:9090/api/students';
  private courseUrl = 'http://localhost:9090/api/courses';

  constructor(private http: HttpClient) {}

  // ===========================
  // STUDENT APIs
  // ===========================

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.studentUrl);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(this.studentUrl, student);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put<any>(`${this.studentUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.studentUrl}/${id}`);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.studentUrl}/${id}`);
  }

  // ===========================
  // COURSE APIs
  // ===========================

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.courseUrl);
  }

  getCourseById(id: number): Observable<any> {
    return this.http.get<any>(`${this.courseUrl}/${id}`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(this.courseUrl, course);
  }

  updateCourse(id: number, course: any): Observable<any> {
    return this.http.put<any>(`${this.courseUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${this.courseUrl}/${id}`);
  }
}