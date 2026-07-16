import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { ToastService } from '../services/toast.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  student = {

    rollNo: '',
    name: '',
    dob: '',
    gender: '',

    email: '',
    phone: '',
    address: '',

    department: '',
    semester: '',
    subjects: '',

    internalMarks: null,
    marks: null,
    cgpa: null,

    attendance: 0,

    status: 'Active',

    parentName: '',
    parentPhone: ''

  };



  constructor(

    private studentService: StudentService,

    private router: Router,

    private toastService: ToastService

  ) {}



  saveStudent() {



    this.student.name = this.student.name.trim();



    if (

      !this.student.rollNo ||

      !this.student.name ||

      !this.student.department ||

      !this.student.semester ||

      !this.student.email ||

      !this.student.phone

    ) {


      this.toastService.show(
        'Please fill all required fields',
        'error'
      );

      return;

    }




    if (!/^[A-Za-z ]+$/.test(this.student.name)) {


      this.toastService.show(
        'Name should contain only letters',
        'error'
      );

      return;

    }




    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(this.student.email)) {


      this.toastService.show(
        'Please enter a valid email',
        'error'
      );

      return;

    }




    if (!/^[0-9]{10}$/.test(this.student.phone)) {


      this.toastService.show(
        'Phone number must be exactly 10 digits',
        'error'
      );

      return;

    }




    this.studentService.addStudent(this.student).subscribe({



      next: () => {


        this.toastService.show(
          '✅ Student Added Successfully'
        );


        this.router.navigate(['/students']);


      },



      error: (err) => {


        console.error(err);


        this.toastService.show(
          '❌ Failed to save student',
          'error'
        );


      }


    });



  }


}