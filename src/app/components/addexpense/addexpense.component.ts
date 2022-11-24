import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css'],
  // animations : [MatDialog]
})
export class AddexpenseComponent implements OnInit {

  constructor(
    // public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

}
