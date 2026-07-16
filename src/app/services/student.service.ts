import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:9090/api/students';

  constructor(private http: HttpClient) { }

  // Get All Students
  getAllStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Add Student
  addStudent(student: any): Observable<any> {
    return this.http.post(this.baseUrl, student);
  }

  // Get Student By ID
  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Update Student
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, student);
  }

  // Delete Student
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Search Student
  searchStudents(keyword: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?keyword=${keyword}`);
  }

}