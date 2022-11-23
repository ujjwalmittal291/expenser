import { Component, OnInit } from '@angular/core';
import { FirestoreDBService } from 'src/app/services/firestore-db.service';
import { expenseFormat } from 'src/app/services/data.model'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddexpenseComponent } from '../addexpense/addexpense.component';
// import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: []
})
export class HomeComponent implements OnInit {
  addFormOpen = false
  currMonthExpenses : any
  month = 0
  formData : any
  constructor( 
    private dbService : FirestoreDBService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    // this.month = new Date().getMonth() + 1
    this.currMonthExpenses = this.dbService.getMonthlyData(new Date().getMonth() + 1)
    // this.dbService.addExpense(this.formData)
  }

  openDialog() {
    this.addFormOpen = true
    const dialogRef = this.dialog.open(AddexpenseComponent, {
      width : '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.addFormOpen = false
  });
  }
}



  // Implementing PolicyDetails interface from data.model
  // formData: expenseFormat = {
  //   account : "Personal",
  //   timeStamp : ''
  // }


