import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: any = {
    id: 0,
    rollNo: '',
    name: '',
    department: '',
    semester: '',
    cgpa: 0,
    email: '',
    phone: '',
    attendance: 'Present',
    status: 'Active'
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.studentService.getStudentById(id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.log(err);
        alert('Failed to load student');
      }
    });

  }

  updateStudent() {

    this.studentService.updateStudent(this.student.id, this.student).subscribe({
      next: () => {
        alert('✅ Student Updated Successfully!');
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.log(err);
        alert('❌ Failed to update student');
      }
    });

  }

}