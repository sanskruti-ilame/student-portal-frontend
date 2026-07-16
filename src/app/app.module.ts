import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { ProfileComponent } from './profile/profile.component';
import { FeesComponent } from './fees/fees.component';
import { ExaminationComponent } from './examination/examination.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { SettingsComponent } from './settings/settings.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { CGPACalculatorComponent } from './cgpa-calculator/cgpa-calculator.component';
import { ToastComponent } from './toast/toast.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  
    AboutComponent,
    DashboardComponent,

    AddStudentComponent,
    EditStudentComponent,
    AttendanceComponent,
    CourseComponent,
    ContactComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ProfileComponent,
    FeesComponent,
    ExaminationComponent,
    AssignmentsComponent,
    AnnouncementsComponent,
    SettingsComponent,
    AcademicCalendarComponent,
    CGPACalculatorComponent,
    ToastComponent,
    LoginComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  NgChartsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }