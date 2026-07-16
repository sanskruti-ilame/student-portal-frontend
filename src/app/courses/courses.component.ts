import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any[] = [];

  course: any = {
    id: null,
    courseName: '',
    courseCode: '',
    department: '',
    semester: null,
    credits: null
  };

  searchKeyword = '';
  isEdit = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  saveCourse() {
    if (this.isEdit) {
      this.courseService.updateCourse(this.course.id, this.course).subscribe(() => {
        alert('Course Updated Successfully');
        this.resetForm();
        this.loadCourses();
      });
    } else {
      this.courseService.addCourse(this.course).subscribe(() => {
        alert('Course Added Successfully');
        this.resetForm();
        this.loadCourses();
      });
    }
  }

  editCourse(course: any) {
    this.course = { ...course };
    this.isEdit = true;
  }

  deleteCourse(id: number) {
    if (confirm('Delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(() => {
        this.loadCourses();
      });
    }
  }

  searchCourse() {
    if (this.searchKeyword.trim() === '') {
      this.loadCourses();
      return;
    }

    this.courseService.searchCourse(this.searchKeyword).subscribe((data: any) => {
      this.courses = data;
    });
  }

  resetForm() {
    this.course = {
      id: null,
      courseName: '',
      courseCode: '',
      department: '',
      semester: null,
      credits: null
    };
    this.isEdit = false;
  }
}