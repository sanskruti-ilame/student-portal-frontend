import { Component } from '@angular/core';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})

export class ExaminationComponent {


academicSession = 'Winter 2026';



cards = [

{
title:'Semester',
value:'6'
},

{
title:'CGPA',
value:'8.50'
},

{
title:'SGPA',
value:'8.70'
},

{
title:'Backlogs',
value:'0'
}

];





exams = [

{
subject:'Angular',
date:'15 Jul 2026',
time:'10:00 AM',
room:'A-201'
},

{
subject:'Spring Boot',
date:'18 Jul 2026',
time:'10:00 AM',
room:'A-204'
},

{
subject:'DBMS',
date:'21 Jul 2026',
time:'02:00 PM',
room:'B-105'
}

];






results = [

{
semester:'Sem 1',
sgpa:'8.20',
status:'Pass'
},

{
semester:'Sem 2',
sgpa:'8.50',
status:'Pass'
},

{
semester:'Sem 3',
sgpa:'8.70',
status:'Pass'
},

{
semester:'Sem 4',
sgpa:'8.80',
status:'Pass'
}

];








downloadHallTicket(){


const pdf = new jsPDF();


pdf.setFontSize(18);

pdf.text(
'Student Hall Ticket',
20,
20
);


pdf.setFontSize(12);


pdf.text(
`Academic Session: ${this.academicSession}`,
20,
40
);


let y=60;


this.exams.forEach(exam=>{


pdf.text(
`${exam.subject} | ${exam.date} | ${exam.time} | ${exam.room}`,
20,
y
);


y += 10;


});


pdf.save('Hall_Ticket.pdf');


}







downloadMarksheet(){


const pdf = new jsPDF();


pdf.setFontSize(18);


pdf.text(
'Student Marksheet',
20,
20
);


pdf.setFontSize(12);


let y=45;


this.results.forEach(result=>{


pdf.text(
`${result.semester} | SGPA: ${result.sgpa} | ${result.status}`,
20,
y
);


y+=10;


});


pdf.save('Marksheet.pdf');


}







viewResult(result:any){


alert(

`Semester : ${result.semester}

SGPA : ${result.sgpa}

Status : ${result.status}`

);


}



}