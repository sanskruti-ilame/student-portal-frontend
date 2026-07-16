import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  student: any = {
    id: '',
    name: '',
    department: '',
    semester: '',
    cgpa: '',
    attendance: '',
    email: '',
    phone: ''
  };

  isEditing = false;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {

    const loggedInStudent = JSON.parse(sessionStorage.getItem('student') || '{}');

    if (!loggedInStudent.id) {
      alert('Please Login First');
      return;
    }

    this.studentService.getStudentById(loggedInStudent.id).subscribe({

      next: (data: any) => {
        this.student = data;
      },

      error: (err: any) => {
        console.log(err);
      }

    });

  }

  editProfile(): void {
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.loadProfile();
  }

  saveProfile(): void {

    this.studentService.updateStudent(this.student.id, this.student).subscribe({

      next: () => {
        alert('Profile Updated Successfully');
        this.isEditing = false;
        this.loadProfile();
      },

      error: (err: any) => {
        console.log(err);
        alert('Update Failed');
      }

    });

  }

  downloadPDF(): void {

    const element = document.getElementById('profile-card');

    if (!element) return;

    html2canvas(element).then(canvas => {

      const pdf = new jsPDF();

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        10,
        10,
        190,
        100
      );

      pdf.save('Student_Profile.pdf');

    });

  }

  downloadImage(): void {

    const element = document.getElementById('profile-card');

    if (!element) return;

    html2canvas(element).then(canvas => {

      const link = document.createElement('a');

      link.download = 'Student_Profile.png';
      link.href = canvas.toDataURL();
      link.click();

    });

  }

}