import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { ApiService } from '../services/api.service';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {


  students:any[] = [];

  filteredStudents:any[] = [];


  totalStudents = 0;

  averageCgpa = 0;

  averageAttendance = 0;


  presentStudents = 0;

  absentStudents = 0;


  semester = "7th";

  department = "CSE";


  searchText = "";


  notificationCount = 3;


  isLoading = true;



  private refreshSubscription!: Subscription;



  attendanceChartType:ChartType='doughnut';

  cgpaChartType:ChartType='bar';



  attendanceChartData:
  ChartConfiguration<'doughnut'>['data'] = {

    labels:[
      'Present',
      'Absent'
    ],

    datasets:[
      {
        data:[0,0]
      }
    ]

  };




  cgpaChartData:
  ChartConfiguration<'bar'>['data'] = {


    labels:[
      'Average CGPA'
    ],


    datasets:[
      {

        label:'CGPA',

        data:[0]

      }
    ]

  };





constructor(
 private apiService:ApiService,
 private cd:ChangeDetectorRef
){}





ngOnInit():void{


 this.loadDashboard();



 this.refreshSubscription =
 interval(5000)
 .subscribe(()=>{

    this.loadDashboard();

 });



}





loadDashboard(){


this.apiService.getStudents()

.subscribe({


next:(data:any)=>{


this.students=data || [];

this.filteredStudents=[...this.students];


this.calculateDashboard();



this.updateCharts();



this.isLoading=false;


this.cd.detectChanges();



},



error:(err)=>{


console.error(
"Dashboard Error",
err
);


this.isLoading=false;


}



});


}






calculateDashboard(){


this.totalStudents=this.students.length;



if(this.totalStudents===0){

return;

}




this.averageCgpa =
this.students.reduce(
(sum,s)=>
sum + Number(s.cgpa || 0),
0
)
/this.totalStudents;





this.averageAttendance =
this.students.reduce(
(sum,s)=>
sum + Number(s.attendance || 0),
0
)
/this.totalStudents;





this.presentStudents =
this.students.filter(
s=>Number(s.attendance)>=75
).length;



this.absentStudents =
this.totalStudents -
this.presentStudents;



if(this.students[0]){


this.semester =
this.students[0].semester || "7th";


this.department =
this.students[0].department || "CSE";


}



}







searchStudents(){


const value =
this.searchText
.toLowerCase();



this.filteredStudents =
this.students.filter(s=>

s.name
?.toLowerCase()
.includes(value)

);



}







updateCharts(){



this.cgpaChartData.datasets[0].data =
[
Number(this.averageCgpa.toFixed(2))
];




this.attendanceChartData.datasets[0].data =
[
this.presentStudents,
this.absentStudents
];



}







ngOnDestroy():void{


if(this.refreshSubscription){

this.refreshSubscription.unsubscribe();

}


}



}