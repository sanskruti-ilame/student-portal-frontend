import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { FeesComponent } from './fees/fees.component';
import { ExaminationComponent } from './examination/examination.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SettingsComponent } from './settings/settings.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CGPACalculatorComponent } from './cgpa-calculator/cgpa-calculator.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  
  { path: 'add-student', component: AddStudentComponent, canActivate: [AuthGuard] },
  { path: 'edit-student/:id', component: EditStudentComponent, canActivate: [AuthGuard] },

  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard] },

  { path: 'course', component: CourseComponent, canActivate: [AuthGuard] },

  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'fees', component: FeesComponent, canActivate: [AuthGuard] },

  { path: 'exam', component: ExaminationComponent, canActivate: [AuthGuard] },

  { path: 'assignments', component: AssignmentsComponent, canActivate: [AuthGuard] },

  { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthGuard] },

   { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },

  { path: 'academic-calendar', component: AcademicCalendarComponent, canActivate: [AuthGuard] },

  { path: 'cgpa-calculator', component: CGPACalculatorComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }