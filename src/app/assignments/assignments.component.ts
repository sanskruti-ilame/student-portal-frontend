import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  assignments: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    // Temporary Data
    // This will be replaced with backend API later.
    this.assignments = [
      {
        id: 1,
        title: 'Java OOP Assignment',
        courseName: 'Java Programming',
        faculty: 'Dr. Sharma',
        dueDate: '2026-07-20',
        status: 'Pending'
      },
      {
        id: 2,
        title: 'Angular Dashboard',
        courseName: 'Web Development',
        faculty: 'Prof. Mehta',
        dueDate: '2026-07-22',
        status: 'Submitted'
      },
      {
        id: 3,
        title: 'DBMS ER Diagram',
        courseName: 'Database Management',
        faculty: 'Dr. Patel',
        dueDate: '2026-07-18',
        status: 'Overdue'
      }
    ];
  }

  editAssignment(assignment: any): void {
    console.log('Edit Assignment:', assignment);
    // TODO: Navigate to Edit Assignment page
  }

  deleteAssignment(id: number): void {
    if (confirm('Are you sure you want to delete this assignment?')) {
      this.assignments = this.assignments.filter(a => a.id !== id);
    }
  }

}