import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: any[] = [];
  searchText = '';

  totalStudents = 0;
  activeStudents = 0;
  presentStudents = 0;
  absentStudents = 0;

  refreshInterval: any;

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.getStudents();

    // Auto refresh every 5 seconds
    this.refreshInterval = setInterval(() => {
      this.getStudents();
    }, 5000);

  }

  ngOnDestroy(): void {

    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }

  }

  getStudents() {

    this.studentService.getAllStudents().subscribe({

      next: (data: any) => {

        this.students = data;

        this.totalStudents = this.students.length;

        this.activeStudents = this.students.filter(s => s.status === 'Active').length;

        this.presentStudents = this.students.filter(s => Number(s.attendance) >= 75).length;

        this.absentStudents = this.students.filter(s => Number(s.attendance) < 75).length;

      },

      error: (err: any) => {
        console.log(err);
      }

    });

  }

  filteredStudents() {

    const search = this.searchText.trim().toLowerCase();

    if (!search) {
      return this.students;
    }

    return this.students.filter(s =>

      String(s.id ?? '').toLowerCase().includes(search) ||

      String(s.rollNo ?? '').toLowerCase().includes(search) ||

      String(s.name ?? '').toLowerCase().includes(search) ||

      String(s.department ?? '').toLowerCase().includes(search) ||

      String(s.semester ?? '').toLowerCase().includes(search) ||

      String(s.branch ?? '').toLowerCase().includes(search) ||

      String(s.subjects ?? '').toLowerCase().includes(search) ||

      String(s.email ?? '').toLowerCase().includes(search) ||

      String(s.phone ?? '').toLowerCase().includes(search) ||

      String(s.status ?? '').toLowerCase().includes(search)

    );

  }

  viewStudent(student: any) {

    alert(`📋 Student Details

Name: ${student.name}
Roll No: ${student.rollNo}
Department: ${student.department}
Semester: ${student.semester}
Branch: ${student.branch}
Subjects: ${student.subjects}
Internal Marks: ${student.internalMarks}
Marks: ${student.marks}
CGPA: ${student.cgpa}
Attendance: ${student.attendance}
Email: ${student.email}
Phone: ${student.phone}
Status: ${student.status}
Parent Name: ${student.parentName}
Parent Phone: ${student.parentPhone}`);

  }

  editStudent(student: any) {
    this.router.navigate(['/edit-student', student.id]);
  }

  deleteStudent(id: number) {

    if (!confirm('Are you sure you want to delete this student?')) {
      return;
    }

    this.studentService.deleteStudent(id).subscribe({

      next: () => {

        this.getStudents();

        alert('Student deleted successfully!');

      },

      error: (err: any) => {

        console.log(err);

        alert('Failed to delete student.');

      }

    });

  }

}