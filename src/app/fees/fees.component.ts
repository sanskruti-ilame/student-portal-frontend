import { Component } from '@angular/core';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})

export class FeesComponent {



academicSession = "Winter 2026";



totalPayable = 19248;

collected = 21043;

outstanding = -1795;






fees = [

{
head:"Tuition Fee",
total:0,
collected:0,
pending:0,
status:"No Dues"
},


{
head:"Development Fee",
total:18848,
collected:18848,
pending:0,
status:"Paid"
},


{
head:"University Fee",
total:400,
collected:400,
pending:0,
status:"Paid"
},


{
head:"Scholarship",
total:0,
collected:0,
pending:0,
status:"No Dues"
},


{
head:"Advance Fees",
total:0,
collected:1795,
pending:-1795,
status:"Excess Paid"
}

];







transactions = [

{
date:"12 Jan 2026",
id:"TXN100245",
mode:"UPI",
amount:18848,
status:"Success"
},


{
date:"15 Jan 2026",
id:"TXN100310",
mode:"Online",
amount:400,
status:"Success"
}

];








payNow(){


alert(
"Redirecting to Payment Gateway..."
);


}








downloadReceipt(){


const pdf = new jsPDF();



pdf.setFontSize(18);


pdf.text(
"Student Fee Receipt",
20,
20
);



pdf.setFontSize(12);


pdf.text(
`Academic Session : ${this.academicSession}`,
20,
40
);



pdf.text(
`Total Paid : ₹${this.collected}`,
20,
55
);



pdf.text(
"Payment Status : Successful",
20,
70
);



pdf.save(
"Fee_Receipt.pdf"
);


}





}