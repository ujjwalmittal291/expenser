import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  // Use input to pass parameters from parent to child
  @Input() componentname = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
