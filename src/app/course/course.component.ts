import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  searchText: string = '';

  course: any = {
    id: null,
    courseName: '',
    courseCode: '',
    department: '',
    semester: null,
    credits: null
  };

  courses: any[] = [];
  allCourses: any[] = [];

  isEdit = false;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  // Load Courses
  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.allCourses = data;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load courses.');
      }
    });
  }

  // Search
  searchCourse() {

    const text = this.searchText.trim().toLowerCase();

    if (!text) {
      this.courses = [...this.allCourses];
      return;
    }

    this.courses = this.allCourses.filter(c =>
      c.courseName?.toLowerCase().includes(text) ||
      c.courseCode?.toLowerCase().includes(text) ||
      c.department?.toLowerCase().includes(text)
    );

  }

  // Refresh
  refreshCourses() {
    this.searchText = '';
    this.courses = [...this.allCourses];
  }

  // Add / Update
  saveCourse() {

    if (
      !this.course.courseName ||
      !this.course.courseCode ||
      !this.course.department ||
      !this.course.semester ||
      !this.course.credits
    ) {
      alert('Please fill all required fields.');
      return;
    }

    if (this.isEdit) {

      this.courseService.updateCourse(this.course.id, this.course)
        .subscribe({
          next: () => {
            alert('✅ Course Updated Successfully');
            this.loadCourses();
            this.resetForm();
          },
          error: () => {
            alert('❌ Failed to update course.');
          }
        });

    } else {

      this.courseService.addCourse(this.course)
        .subscribe({
          next: () => {
            alert('✅ Course Added Successfully');
            this.loadCourses();
            this.resetForm();
          },
          error: () => {
            alert('❌ Failed to add course.');
          }
        });

    }

  }

  // Edit
  editCourse(c: any) {
    this.course = { ...c };
    this.isEdit = true;
  }

  // Delete
  deleteCourse(id: number) {

    if (confirm('Are you sure you want to delete this course?')) {

      this.courseService.deleteCourse(id)
        .subscribe({
          next: () => {
            alert('✅ Course Deleted Successfully');
            this.loadCourses();
          },
          error: () => {
            alert('❌ Failed to delete course.');
          }
        });

    }

  }

  // Reset
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